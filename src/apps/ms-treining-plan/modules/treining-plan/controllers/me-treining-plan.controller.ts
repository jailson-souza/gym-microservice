import { Controller, Get, Post, Param, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindByStudentTrainingPlanByUserIdUseCase } from '../use-case/find-by-student-training-plan-by-user-id';
import { FindOneTrainingPlansUseCase } from '../use-case/find-one-treining-plan.use-case';
import { FinishExerciseTrainingPlansUseCase } from '../use-case/finish-exercise-treining-plan.use-case';
import { StartExerciseTrainingPlansUseCase } from '../use-case/start-exercise-treining-plan.use-case';

@Controller('me/training-plan')
export class MeTrainingPlansController {
  constructor(
    private readonly findOneTrainingPlansUseCase: FindOneTrainingPlansUseCase,
    private readonly finishExerciseTrainingPlansUseCase: FinishExerciseTrainingPlansUseCase,
    private readonly startExerciseTrainingPlansUseCase: StartExerciseTrainingPlansUseCase,
    private readonly findByStudentTrainingByUserIdPlanUseCase: FindByStudentTrainingPlanByUserIdUseCase,
  ) {}

  @Get()
  @CheckRole()
  findMeAll(@Req() req) {
    return this.findByStudentTrainingByUserIdPlanUseCase.execute(req.user.id);
  }

  @Get(':id')
  @CheckRole()
  findMeOne(@Param('id') id: string) {
    return this.findOneTrainingPlansUseCase.execute(id);
  }

  @Post(':trainingPlanId/exercises/:exerciseId/start')
  @CheckRole()
  start(
    @Req() req,
    @Param('trainingPlanId') trainingPlanId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return this.startExerciseTrainingPlansUseCase.execute({
      trainingPlanId,
      exerciseId,
      studentId: req.user.studentId,
    });
  }

  @Post(':trainingPlanId/exercises/:exerciseId/finish')
  @CheckRole()
  finish(
    @Req() req,
    @Param('trainingPlanId') trainingPlanId: string,
    @Param('exerciseId') exerciseId: string,
  ) {
    return this.finishExerciseTrainingPlansUseCase.execute({
      trainingPlanId,
      exerciseId,
      studentId: req.user.studentId,
    });
  }
}
