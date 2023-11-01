import { Controller, Get, Param, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { FindAllTrainingPlanHistoryUseCase } from '../use-case/find-all-treining-plan-history.use-case';
import { FindByStudentTrainingPlanHistoryUseCase } from '../use-case/find-by-student-treining-plan-history.use-case';
import { FindOneTrainingPlanHistoryUseCase } from '../use-case/find-one-treining-plan-history.use-case';

@Controller('training-plan-history')
export class TrainingPlanHistoryController {
  constructor(
    private readonly findAllTrainingPlanHistoryUseCase: FindAllTrainingPlanHistoryUseCase,
    private readonly findOneTrainingPlanHistoryUseCase: FindOneTrainingPlanHistoryUseCase,
    private readonly findByStudentTrainingPlanHistoryUseCase: FindByStudentTrainingPlanHistoryUseCase,
  ) {}

  @Get()
  @CheckRole(RoleEnum.ADMIN)
  findAll() {
    return this.findAllTrainingPlanHistoryUseCase.execute();
  }

  @Get('me')
  @CheckRole()
  findMe(@Req() req) {
    return this.findByStudentTrainingPlanHistoryUseCase.execute(
      req.user.studentId,
    );
  }

  @Get(':id')
  @CheckRole(RoleEnum.ADMIN)
  findOne(@Param('id') id: string) {
    return this.findOneTrainingPlanHistoryUseCase.execute(id);
  }
}
