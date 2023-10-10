import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { UsersController } from './controllers/users.controller';
import { UpdateUsersUseCase } from './use-case/update-users.use-case';
import { MeUsersController } from './controllers/me-users.controller';
import { ActivateUsersUseCase } from './use-case/activate-users.use-case';
import { CreateUsersUseCase } from './use-case/create-users.use-case';
import { FindAllUsersUseCase } from './use-case/find-all-users.use-case';
import { FindOneUsersUseCase } from './use-case/find-one-users.use-case';
import { InactivateUsersUseCase } from './use-case/inactivate-users.use-case';

@Module({
  controllers: [UsersController, MeUsersController],
  providers: [
    PrismaService,
    ActivateUsersUseCase,
    CreateUsersUseCase,
    FindAllUsersUseCase,
    FindOneUsersUseCase,
    InactivateUsersUseCase,
    UpdateUsersUseCase,
  ],
})
export class UsersModule {}
