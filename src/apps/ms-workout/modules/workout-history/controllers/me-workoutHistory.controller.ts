import { Controller, Get, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindByStudentWorkoutHistoryUseCase } from '../use-case/find-by-student-workout-history.use-case';

@Controller('me/workoutHistory')
export class MeWorkoutHistoryController {
  constructor(
    private readonly findByStudentWorkoutHistoryUseCase: FindByStudentWorkoutHistoryUseCase,
  ) {}

  @Get()
  @CheckRole()
  findMe(@Req() req) {
    return this.findByStudentWorkoutHistoryUseCase.execute(req.user.studentId);
  }
}
