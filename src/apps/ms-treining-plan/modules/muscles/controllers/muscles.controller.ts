import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateMuscleDto } from '../dto/create-muscle.dto';
import { UpdateMuscleDto } from '../dto/update-muscle.dto';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { ActivateMusclesUseCase } from '../use-case/activate-muscles.use-case';
import { CreateMusclesUseCase } from '../use-case/create-muscles.use-case';
import { FindAllMusclesUseCase } from '../use-case/find-all-muscles.use-case';
import { FindOneMusclesUseCase } from '../use-case/find-one-muscles.use-case';
import { InactivateMusclesUseCase } from '../use-case/inactivate-muscles.use-case';
import { UpdateMusclesUseCase } from '../use-case/update-muscles.use-case';

@Controller('muscles')
export class MusclesController {
  constructor(
    private readonly createMusclesUseCase: CreateMusclesUseCase,
    private readonly findAllMusclesUseCase: FindAllMusclesUseCase,
    private readonly findOneMusclesUseCase: FindOneMusclesUseCase,
    private readonly updateMusclesUseCase: UpdateMusclesUseCase,
    private readonly inactivateMusclesUseCase: InactivateMusclesUseCase,
    private readonly activateMusclesUseCase: ActivateMusclesUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Teacher)
  create(@Body() createMuscleDto: CreateMuscleDto) {
    return this.createMusclesUseCase.execute(createMuscleDto);
  }

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

  @Patch(':id')
  @CheckRole(RoleEnum.Teacher)
  update(@Param('id') id: string, @Body() updateMuscleDto: UpdateMuscleDto) {
    return this.updateMusclesUseCase.execute(id, updateMuscleDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Teacher)
  inactivate(@Param('id') id: string) {
    return this.inactivateMusclesUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Teacher)
  activate(@Param('id') id: string) {
    return this.activateMusclesUseCase.execute(id);
  }
}
