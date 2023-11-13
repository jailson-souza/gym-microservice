import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },

      select: {
        id: true,
        name: true,
        email: true,
        isActive: true,
        createdAt: true,
        userRoles: { select: { role: true } },
        student: {
          select: {
            id: true,
          },
        },
      },
    });
  }
}
