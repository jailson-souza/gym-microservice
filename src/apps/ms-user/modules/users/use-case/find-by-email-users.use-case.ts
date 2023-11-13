import { Injectable } from '@nestjs/common';
import { User } from 'src/shared/models/User';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByEmailUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(email: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { email },
      include: { userRoles: { select: { role: true } } },
    }) as any;
  }
}
