import { Injectable } from '@nestjs/common';
import { Role } from 'src/shared/models/Role';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllRolesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<Role[]> {
    return this.prisma.role.findMany() as Promise<Role[]>;
  }
}
