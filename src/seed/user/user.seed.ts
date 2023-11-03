import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUsersUseCase } from '../../apps/ms-user/modules/users/use-case/create-users.use-case';
import { RoleEnum } from '../../shared/models/enums/Role.enum';
import { PrismaService } from '../../shared/utils/prisma';

@Injectable()
export class UserSeedService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly createUsersUseCase: CreateUsersUseCase,
  ) {}

  async run() {
    const DEFAULT_USER_EMAIL = this.config.get('DEFAULT_USER_EMAIL');
    const DEFAULT_USER_PASSWORD = this.config.get('DEFAULT_USER_PASSWORD');

    const userAdmin = await this.prisma.user.findFirst({
      where: { email: DEFAULT_USER_EMAIL },
    });

    if (!userAdmin) {
      await this.createUsersUseCase.execute({
        name: 'Gym Power',
        email: DEFAULT_USER_EMAIL,
        password: DEFAULT_USER_PASSWORD,
        roles: [RoleEnum.ADMIN],
      });
    }
  }
}
