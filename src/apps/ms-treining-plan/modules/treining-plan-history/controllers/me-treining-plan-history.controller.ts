import { Controller, Get, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindByStudentTrainingPlanHistoryUseCase } from '../use-case/find-by-student-treining-plan-history.use-case';

@Controller('me/training-plan-history')
export class MeTrainingPlanHistoryController {
  constructor(
    private readonly findByStudentTrainingPlanHistoryUseCase: FindByStudentTrainingPlanHistoryUseCase,
  ) {}

  @Get()
  @CheckRole()
  findMe(@Req() req) {
    return this.findByStudentTrainingPlanHistoryUseCase.execute(
      req.user.studentId,
    );
  }
}
