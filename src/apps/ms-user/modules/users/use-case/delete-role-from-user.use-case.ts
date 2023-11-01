import { Injectable } from '@nestjs/common';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { PrismaService } from 'src/shared/utils/prisma';

type TInputDeleteUserRole = {
  userId: string;
  role: RoleEnum;
};

@Injectable()
export class DeleteRoleFromUserUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ userId, role }: TInputDeleteUserRole): Promise<void> {
    await this.prisma.userRole.deleteMany({
      where: { userId, role } as any,
    });
  }
}
