import { Injectable } from '@nestjs/common';
import { Role } from 'src/shared/models/Role';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneRolesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<Role> {
    const role = await this.prisma.role.findUnique({
      where: { id },
    });

    return role as Role;
  }
}
