import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';
import { UpdateRoleDto } from '../dto/update-role.dto';

@Injectable()
export class UpdateRolesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateRoleDto): Promise<void> {
    const data = removePropertyNotAllowed(input, ['name']);
    await this.prisma.role.update({ where: { id }, data });
  }
}
