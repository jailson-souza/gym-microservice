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
    const userRole = await this.prisma.userRole.findMany({
      where: { userId: input.userId },
      select: { id: true, role: true },
    });

    const rolesToInsert = input.roles
      .filter((role) => !userRole?.some((userRole) => userRole.role === role))
      .map((role) => ({ role, userId: input.userId }));

    if (rolesToInsert?.length > 0) {
      await this.prisma.userRole.createMany({ data: rolesToInsert });
    }
  }
}
