import { Module } from '@nestjs/common';
import { WorkoutHistoryController } from './controllers/workoutHistory.controller';
import { FindOneWorkoutHistoryUseCase } from './use-case/find-one-workout-history.use-case';
import { PrismaService } from 'src/shared/utils/prisma';
import { StudentExternalService } from '../../external-services/student.external-service';
import { MeWorkoutHistoryController } from './controllers/me-workoutHistory.controller';
import { FindAllWorkoutHistoryUseCase } from './use-case/find-all-workout-history.use-case';
import { FindByStudentWorkoutHistoryUseCase } from './use-case/find-by-student-workout-history.use-case';

@Module({
  controllers: [WorkoutHistoryController, MeWorkoutHistoryController],
  providers: [
    PrismaService,
    FindAllWorkoutHistoryUseCase,
    FindOneWorkoutHistoryUseCase,
    FindByStudentWorkoutHistoryUseCase,
    StudentExternalService,
  ],
})
export class WorkoutHistoryModule {}
