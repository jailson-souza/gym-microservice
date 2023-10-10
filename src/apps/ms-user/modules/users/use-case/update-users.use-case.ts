import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { encryptPassword } from 'src/shared/utils/libs/encryptor.lib';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';

@Injectable()
export class UpdateUsersUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateUserDto): Promise<void> {
    const data = removePropertyNotAllowed(input, [
      'name',
      'email',
      'password',
      'role',
    ]) as any;
    if (input.password) {
      input.password = await encryptPassword(input.password);
    }
    await this.prisma.user.update({ where: { id }, data });
  }
}
