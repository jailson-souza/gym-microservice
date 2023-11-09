import { Module } from '@nestjs/common';
import { MusclesController } from './controllers/muscles.controller';
import { ActivateMusclesUseCase } from './use-case/activate-muscles.use-case';
import { PrismaService } from 'src/shared/utils/prisma';
import { FindAllMusclesUseCase } from './use-case/find-all-muscles.use-case';
import { FindOneMusclesUseCase } from './use-case/find-one-muscles.use-case';
import { InactivateMusclesUseCase } from './use-case/inactivate-muscles.use-case';

@Module({
  controllers: [MusclesController],
  providers: [
    PrismaService,
    FindAllMusclesUseCase,
    FindOneMusclesUseCase,
    InactivateMusclesUseCase,
    ActivateMusclesUseCase,
  ],
})
export class MusclesModule {}
