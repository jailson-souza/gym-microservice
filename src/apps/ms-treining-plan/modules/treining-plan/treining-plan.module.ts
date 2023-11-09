import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { MeTrainingPlansController } from './controllers/me-treining-plan.controller';
import { TrainingPlansController } from './controllers/treining-plan.controller';
import { ActivateTrainingPlansUseCase } from './use-case/activate-treining-plan.use-case';
import { CreateTrainingPlansUseCase } from './use-case/create-treining-plan.use-case';
import { FindAllTrainingPlansUseCase } from './use-case/find-all-treining-plan.use-case';
import { FindByStudentTrainingPlanByUserIdUseCase } from './use-case/find-by-student-training-plan-by-user-id';
import { FindOneTrainingPlansUseCase } from './use-case/find-one-treining-plan.use-case';
import { FinishExerciseTrainingPlansUseCase } from './use-case/finish-exercise-treining-plan.use-case';
import { InactivateTrainingPlansUseCase } from './use-case/inactivate-treining-plan.use-case';
import { StartExerciseTrainingPlansUseCase } from './use-case/start-exercise-treining-plan.use-case';
import { UpdateTrainingPlansUseCase } from './use-case/update-treining-plan.use-case';
import { Paginator } from 'src/shared/utils/paginator';

@Module({
  controllers: [TrainingPlansController, MeTrainingPlansController],
  providers: [
    PrismaService,
    CreateTrainingPlansUseCase,
    FindAllTrainingPlansUseCase,
    FindOneTrainingPlansUseCase,
    UpdateTrainingPlansUseCase,
    InactivateTrainingPlansUseCase,
    ActivateTrainingPlansUseCase,
    FinishExerciseTrainingPlansUseCase,
    StartExerciseTrainingPlansUseCase,
    FindByStudentTrainingPlanByUserIdUseCase,
    Paginator,
  ],
})
export class TrainingPlansModule {}
