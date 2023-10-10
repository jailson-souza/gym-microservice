import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/shared/models/User';
import { PrismaService } from 'src/shared/utils/prisma';
import { encryptPassword } from 'src/shared/utils/libs/encryptor.lib';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class CreateUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateUserDto): Promise<User> {
    await this.verifyExistingUser(input.email);

    if (input.password) {
      input.password = await encryptPassword(input.password);
    }
    input.email = input.email.toLowerCase();
    const user = await this.prisma.user.create({ data: input as any });
    delete user.password;
    return user as User;
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
