import { Injectable } from '@nestjs/common';
import { User } from 'src/shared/models/User';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        password: true,
        isActive: true,
        name: true,
        roleId: true,
        studentId: true,
        role: true,
      },
    });

    delete user.password;
    return user as User;
  }
}
