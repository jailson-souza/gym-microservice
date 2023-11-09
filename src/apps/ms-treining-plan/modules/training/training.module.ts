import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { MeTrainingController } from './controllers/me-training.controller';
import { StartTrainingUseCase } from './use-case/start-treining.use-case';
import { FinishTrainingUseCase } from './use-case/finish-treining.use-case';

@Module({
  controllers: [MeTrainingController],
  providers: [PrismaService, StartTrainingUseCase, FinishTrainingUseCase],
})
export class TrainingModule {}
