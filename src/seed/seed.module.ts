import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from '../shared/utils/prisma';
import { MuscleSeedService } from './muscle/muscle-seed.service';
import { SeedService } from './seed.service';
import { ExerciseSeedService } from './exercise/exercise-seed.service';
import { UserSeedService } from './user/user.seed';
import { CreateUsersUseCase } from '../apps/ms-user/modules/users/use-case/create-users.use-case';
import { AddRoleToUserUseCase } from '../apps/ms-user/modules/users/use-case/add-role-to-user.use-case';
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [
    PrismaService,
    ConfigService,
    CreateUsersUseCase,
    SeedService,
    MuscleSeedService,
    ExerciseSeedService,
    UserSeedService,
    AddRoleToUserUseCase,
  ],
})
export class SeedModule {}
