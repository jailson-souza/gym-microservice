import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}
  execute() {
    return this.prisma.user.findMany({
      include: { userRoles: { select: { role: true } } },
    });
  }
}
