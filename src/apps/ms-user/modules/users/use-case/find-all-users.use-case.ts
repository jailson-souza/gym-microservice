import { Injectable } from '@nestjs/common';
import { User } from 'src/shared/models/User';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<User[]> {
    return this.prisma.user.findMany() as Promise<any[]>;
  }
}
