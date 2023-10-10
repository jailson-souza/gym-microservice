import { Controller, Get, Param, Req } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { FindOneWorkoutHistoryUseCase } from '../use-case/find-one-workout-history.use-case';
import { FindAllWorkoutHistoryUseCase } from '../use-case/find-all-workout-history.use-case';
import { FindByStudentWorkoutHistoryUseCase } from '../use-case/find-by-student-workout-history.use-case';

@Controller('workoutHistory')
export class WorkoutHistoryController {
  constructor(
    private readonly findAllWorkoutHistoryUseCase: FindAllWorkoutHistoryUseCase,
    private readonly findOneWorkoutHistoryUseCase: FindOneWorkoutHistoryUseCase,
    private readonly findByStudentWorkoutHistoryUseCase: FindByStudentWorkoutHistoryUseCase,
  ) {}

  @Get()
  @CheckRole(RoleEnum.Admin)
  findAll() {
    return this.findAllWorkoutHistoryUseCase.execute();
  }

  @Get('me')
  @CheckRole()
  findMe(@Req() req) {
    return this.findByStudentWorkoutHistoryUseCase.execute(req.user.studentId);
  }

  @Get(':id')
  @CheckRole(RoleEnum.Admin)
  findOne(@Param('id') id: string) {
    return this.findOneWorkoutHistoryUseCase.execute(id);
  }
}
