import { Controller, Get, Patch, Param, Delete, Query } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { ActivateExercisesUseCase } from '../use-case/activate-exercises.use-case';
import { FindAllExercisesUseCase } from '../use-case/find-all-exercises.use-case';
import { FindOneExercisesUseCase } from '../use-case/find-one-exercises.use-case';
import { InactivateExercisesUseCase } from '../use-case/inactivate-exercises.use-case';

@Controller('exercises')
export class ExercisesController {
  constructor(
    private readonly findAllExercisesUseCase: FindAllExercisesUseCase,
    private readonly findOneExercisesUseCase: FindOneExercisesUseCase,
    private readonly inactivateExercisesUseCase: InactivateExercisesUseCase,
    private readonly activateExercisesUseCase: ActivateExercisesUseCase,
  ) {}

  @Get()
  @CheckRole()
  findAll(@Query('page') page: string, @Query('limit') limit: string) {
    return this.findAllExercisesUseCase.execute({ page: +page, limit: +limit });
  }

  @Get(':id')
  @CheckRole()
  findOne(@Param('id') id: string) {
    return this.findOneExercisesUseCase.execute(id);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.TEACHER)
  inactivate(@Param('id') id: string) {
    return this.inactivateExercisesUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.TEACHER)
  activate(@Param('id') id: string) {
    return this.activateExercisesUseCase.execute(id);
  }
}
