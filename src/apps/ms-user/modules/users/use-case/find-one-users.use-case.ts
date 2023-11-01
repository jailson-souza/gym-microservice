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
        password: false,
        id: true,
        name: true,
        email: true,
        isActive: true,
        createdAt: true,
        userRoles: true,
      },
    });
    return user as User;
  }
}
