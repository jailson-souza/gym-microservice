import { Controller, Param, Patch, Req, HttpCode } from '@nestjs/common';
import { StartTrainingUseCase } from '../use-case/start-treining.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { FinishTrainingUseCase } from '../use-case/finish-treining.use-case';

@Controller('me/training')
export class MeTrainingController {
  constructor(
    private readonly startTrainingUseCase: StartTrainingUseCase,
    private readonly finishTrainingUseCase: FinishTrainingUseCase,
  ) {}

  @Patch(':trainingId/start')
  @CheckRole(RoleEnum.STUDENT)
  @HttpCode(204)
  start(@Param('trainingId') trainingId, @Req() req) {
    return this.startTrainingUseCase.execute({
      trainingId,
      studentId: req.user.student.id,
    });
  }

  @Patch(':trainingId/finish')
  @CheckRole(RoleEnum.STUDENT)
  @HttpCode(204)
  finish(@Param('trainingId') trainingId, @Req() req) {
    return this.finishTrainingUseCase.execute({
      trainingId,
      studentId: req.user.student.id,
    });
  }
}
