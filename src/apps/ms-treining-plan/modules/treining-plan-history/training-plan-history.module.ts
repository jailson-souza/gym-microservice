import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { MeTrainingPlanHistoryController } from './controllers/me-treining-plan-history.controller';
import { TrainingPlanHistoryController } from './controllers/treining-plan-history.controller';
import { FindAllTrainingPlanHistoryUseCase } from './use-case/find-all-treining-plan-history.use-case';
import { FindByStudentTrainingPlanHistoryUseCase } from './use-case/find-by-student-treining-plan-history.use-case';
import { FindOneTrainingPlanHistoryUseCase } from './use-case/find-one-treining-plan-history.use-case';

@Module({
  controllers: [TrainingPlanHistoryController, MeTrainingPlanHistoryController],
  providers: [
    PrismaService,
    FindAllTrainingPlanHistoryUseCase,
    FindOneTrainingPlanHistoryUseCase,
    FindByStudentTrainingPlanHistoryUseCase,
  ],
})
export class TrainingPlanHistoryModule {}
