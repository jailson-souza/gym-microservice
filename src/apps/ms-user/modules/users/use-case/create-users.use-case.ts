import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '../../../../../shared/models/User';
import { PrismaService } from '../../../../../shared/utils/prisma';
import { encryptPassword } from '../../../../../shared/utils/libs/encryptor.lib';
import { CreateUserDto } from '../dto/create-user.dto';
import { AddRoleToUserUseCase } from './add-role-to-user.use-case';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

@Injectable()
export class CreateUsersUseCase {
  constructor(
    private readonly prisma: PrismaService,
    private readonly addRoleToUserUseCase: AddRoleToUserUseCase,
  ) {}

  async execute(input: CreateUserDto): Promise<User> {
    await this.verifyExistingUser(input.email);

    if (input.password) {
      input.password = await encryptPassword(input.password);
    }
    input.email = input.email.toLowerCase();
    const { roles, ...data } = input;
    const user = await this.prisma.user.create({ data });
    await this.addRoleToUserUseCase.execute({ roles, userId: user.id });
    delete user.password;
    if (roles.includes(RoleEnum.STUDENT)) {
      await this.prisma.student.create({
        data: {
          userId: user.id,
          email: user.email,
          name: user.name,
        },
      });
    }

    return this.prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        email: true,
        isActive: true,
        createdAt: true,
        userRoles: true,
      },
    }) as Promise<User>;
  }

  private async verifyExistingUser(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true },
    });
    if (user) {
      throw new ConflictException('user is already exist');
    }
  }
}
