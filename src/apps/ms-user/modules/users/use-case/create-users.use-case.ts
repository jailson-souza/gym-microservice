import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/shared/models/User';
import { PrismaService } from 'src/shared/utils/prisma';
import { encryptPassword } from 'src/shared/utils/libs/encryptor.lib';
import { CreateUserDto } from '../dto/create-user.dto';
import { AddRoleToUserUseCase } from './add-role-to-user.use-case';

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
