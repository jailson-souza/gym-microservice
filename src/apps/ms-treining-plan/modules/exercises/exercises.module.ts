import { Module } from '@nestjs/common';
import { ExercisesController } from './controllers/exercises.controller';
import { ActivateExercisesUseCase } from './use-case/activate-exercises.use-case';
import { PrismaService } from 'src/shared/utils/prisma';
import { FindAllExercisesUseCase } from './use-case/find-all-exercises.use-case';
import { FindOneExercisesUseCase } from './use-case/find-one-exercises.use-case';
import { InactivateExercisesUseCase } from './use-case/inactivate-exercises.use-case';
import { Paginator } from 'src/shared/utils/paginator';

@Module({
  controllers: [ExercisesController],
  providers: [
    PrismaService,
    FindAllExercisesUseCase,
    FindOneExercisesUseCase,
    InactivateExercisesUseCase,
    ActivateExercisesUseCase,
    Paginator,
  ],
})
export class ExercisesModule {}
