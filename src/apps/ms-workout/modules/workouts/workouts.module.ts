import { Module } from '@nestjs/common';
import { UpdateWorkoutsUseCase } from './use-case/update-workouts.use-case';
import { PrismaService } from 'src/shared/utils/prisma';
import { StudentExternalService } from '../../external-services/student.external-service';
import { WorkoutsController } from './controllers/workouts.controller';
import { MeWorkoutsController } from './controllers/meWorkouts.controller';
import { ActivateWorkoutsUseCase } from './use-case/activate-workouts.use-case';
import { CreateWorkoutsUseCase } from './use-case/create-workouts.use-case';
import { FindAllWorkoutsUseCase } from './use-case/find-all-workouts.use-case';
import { FindByStudentWorkoutUseCase } from './use-case/find-by-student-workout.use-case';
import { FindOneWorkoutsUseCase } from './use-case/find-one-workouts.use-case';
import { FinishExerciseWorkoutsUseCase } from './use-case/finish-exercise-workouts.use-case';
import { InactivateWorkoutsUseCase } from './use-case/inactivate-workouts.use-case';
import { StartExerciseWorkoutsUseCase } from './use-case/start-exercise-workouts.use-case';

@Module({
  controllers: [WorkoutsController, MeWorkoutsController],
  providers: [
    PrismaService,
    CreateWorkoutsUseCase,
    FindAllWorkoutsUseCase,
    FindOneWorkoutsUseCase,
    UpdateWorkoutsUseCase,
    InactivateWorkoutsUseCase,
    ActivateWorkoutsUseCase,
    FinishExerciseWorkoutsUseCase,
    StartExerciseWorkoutsUseCase,
    FindByStudentWorkoutUseCase,
    StudentExternalService,
  ],
})
export class WorkoutsModule {}
