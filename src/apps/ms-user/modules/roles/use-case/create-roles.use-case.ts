import { ConflictException, Injectable } from '@nestjs/common';
import { Role } from 'src/shared/models/Role';
import { PrismaService } from 'src/shared/utils/prisma';
import { removeAccents, camelCase } from 'src/shared/utils/libs/text.lib';
import { CreateRoleDto } from '../dto/create-role.dto';

@Injectable()
export class CreateRolesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateRoleDto): Promise<Role> {
    const key = camelCase(removeAccents(input.name));
    await this.verifyExistingRole(key);
    return await this.prisma.role.create({ data: { ...input, key } });
  }

  private async verifyExistingRole(key: string) {
    const role = await this.prisma.role.findFirst({
      where: { key },
      select: { id: true, key: true },
    });
    if (role) {
      throw new ConflictException('role is already exist');
    }
  }
}
