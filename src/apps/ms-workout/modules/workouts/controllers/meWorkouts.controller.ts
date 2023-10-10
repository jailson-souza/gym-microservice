import { Controller, Get, Post, Param, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindByStudentWorkoutUseCase } from '../use-case/find-by-student-workout.use-case';
import { FindOneWorkoutsUseCase } from '../use-case/find-one-workouts.use-case';
import { FinishExerciseWorkoutsUseCase } from '../use-case/finish-exercise-workouts.use-case';
import { StartExerciseWorkoutsUseCase } from '../use-case/start-exercise-workouts.use-case';

@Controller('me/workouts')
export class MeWorkoutsController {
  constructor(
    private readonly findOneWorkoutsUseCase: FindOneWorkoutsUseCase,
    private readonly finishExerciseWorkoutsUseCase: FinishExerciseWorkoutsUseCase,
    private readonly startExerciseWorkoutsUseCase: StartExerciseWorkoutsUseCase,
    private readonly findByStudentWorkoutUseCase: FindByStudentWorkoutUseCase,
  ) {}

  @Get()
  @CheckRole()
  findMeAll(@Req() req) {
    return this.findByStudentWorkoutUseCase.execute(req.user.studentId);
  }

  @Get(':id')
  @CheckRole()
  findMeOne(@Param('id') id: string) {
    return this.findOneWorkoutsUseCase.execute(id);
  }

  @Post(':workoutId/exercises/:exerciseId/start')
  @CheckRole()
  start(
    @Req() req,
    @Param('workoutId') workoutId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return this.startExerciseWorkoutsUseCase.execute({
      workoutId,
      exerciseId,
      studentId: req.user.studentId,
    });
  }

  @Post(':workoutId/exercises/:exerciseId/finish')
  @CheckRole()
  finish(
    @Req() req,
    @Param('workoutId') workoutId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return this.finishExerciseWorkoutsUseCase.execute({
      workoutId,
      exerciseId,
      studentId: req.user.studentId,
    });
  }
}
