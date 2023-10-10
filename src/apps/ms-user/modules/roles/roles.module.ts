import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { RolesController } from './controllers/roles.controller';
import { ActivateRolesUseCase } from './use-case/activate-roles.use-case';
import { CreateRolesUseCase } from './use-case/create-roles.use-case';
import { FindAllRolesUseCase } from './use-case/find-all-roles.use-case';
import { FindOneRolesUseCase } from './use-case/find-one-roles.use-case';
import { InactivateRolesUseCase } from './use-case/inactivate-roles.use-case';
import { UpdateRolesUseCase } from './use-case/update-roles.use-case';

@Module({
  controllers: [RolesController],
  providers: [
    PrismaService,
    ActivateRolesUseCase,
    CreateRolesUseCase,
    FindAllRolesUseCase,
    FindOneRolesUseCase,
    InactivateRolesUseCase,
    UpdateRolesUseCase,
  ],
})
export class RolesModule {}
