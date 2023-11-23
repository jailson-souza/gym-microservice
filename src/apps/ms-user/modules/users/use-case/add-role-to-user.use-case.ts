import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../../shared/utils/prisma';
import { RoleEnum } from '../../../../../shared/models/enums/Role.enum';

type TInputAddRoleToUser = {
  userId: string;
  roles: RoleEnum[];
};

@Injectable()
export class AddRoleToUserUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: TInputAddRoleToUser): Promise<void> {
    await this.prisma.userRole.deleteMany({ where: { userId: input.userId } });
    const rolesToInsert = input.roles.map((role) => ({
      role,
      userId: input.userId,
    }));
    await this.prisma.userRole.createMany({ data: rolesToInsert });
  }
}
