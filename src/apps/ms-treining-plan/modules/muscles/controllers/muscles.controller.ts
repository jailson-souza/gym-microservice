import { Controller, Get, Patch, Param, Delete } from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { ActivateMusclesUseCase } from '../use-case/activate-muscles.use-case';
import { FindAllMusclesUseCase } from '../use-case/find-all-muscles.use-case';
import { FindOneMusclesUseCase } from '../use-case/find-one-muscles.use-case';
import { InactivateMusclesUseCase } from '../use-case/inactivate-muscles.use-case';

@Controller('muscles')
export class MusclesController {
  constructor(
    private readonly findAllMusclesUseCase: FindAllMusclesUseCase,
    private readonly findOneMusclesUseCase: FindOneMusclesUseCase,
    private readonly inactivateMusclesUseCase: InactivateMusclesUseCase,
    private readonly activateMusclesUseCase: ActivateMusclesUseCase,
  ) {}

  @Get()
  @CheckRole()
  findAll() {
    return this.findAllMusclesUseCase.execute();
  }

  @Get(':id')
  @CheckRole()
  findOne(@Param('id') id: string) {
    return this.findOneMusclesUseCase.execute(id);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.TEACHER)
  inactivate(@Param('id') id: string) {
    return this.inactivateMusclesUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.TEACHER)
  activate(@Param('id') id: string) {
    return this.activateMusclesUseCase.execute(id);
  }
}
