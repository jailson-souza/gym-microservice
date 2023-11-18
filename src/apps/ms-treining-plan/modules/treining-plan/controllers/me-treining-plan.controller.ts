import { Controller, Get, Param, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindByStudentTrainingPlanByUserIdUseCase } from '../use-case/find-by-student-training-plan-by-user-id';
import { FindOneTrainingPlansUseCase } from '../use-case/find-one-treining-plan.use-case';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

@Controller('me/training-plan')
export class MeTrainingPlansController {
  constructor(
    private readonly findOneTrainingPlansUseCase: FindOneTrainingPlansUseCase,
    private readonly findByStudentTrainingPlanByUserIdUseCase: FindByStudentTrainingPlanByUserIdUseCase,
  ) {}

  @Get()
  @CheckRole(RoleEnum.STUDENT)
  findMeAll(@Req() req) {
    return this.findByStudentTrainingPlanByUserIdUseCase.execute(req.user.id);
  }

  @Get(':id')
  @CheckRole(RoleEnum.STUDENT)
  findMeOne(@Param('id') id: string) {
    return this.findOneTrainingPlansUseCase.execute(id);
  }
}
