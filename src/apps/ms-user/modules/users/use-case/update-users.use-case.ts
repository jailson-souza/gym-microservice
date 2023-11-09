import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { encryptPassword } from 'src/shared/utils/libs/encryptor.lib';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';
import { AddRoleToUserUseCase } from './add-role-to-user.use-case';

@Injectable()
export class UpdateUsersUseCase {
  constructor(
    private readonly prisma: PrismaService,
    private readonly addRoleToUserUseCase: AddRoleToUserUseCase,
  ) {}

  async execute(id: string, input: UpdateUserDto): Promise<void> {
    const { roles, ...data } = removePropertyNotAllowed(input, [
      'name',
      'email',
      'password',
      'roles',
    ]) as any;

    if (data) {
      if (data?.password) {
        data.password = await encryptPassword(input.password);
      }
      await this.prisma.user.update({ where: { id }, data });
    }

    if (roles?.length > 0) {
      await this.addRoleToUserUseCase.execute({ userId: id, roles });
    }
  }
}
