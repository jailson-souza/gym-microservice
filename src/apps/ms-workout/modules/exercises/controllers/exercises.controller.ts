import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateExerciseDto } from '../dto/create-exercise.dto';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { ActivateExercisesUseCase } from '../use-case/activate-exercises.use-case';
import { FindAllExercisesUseCase } from '../use-case/find-all-exercises.use-case';
import { UpdateExercisesUseCase } from '../use-case/update-exercises.use-case';
import { CreateExercisesUseCase } from '../use-case/create-exercises.use-case';
import { FindOneExercisesUseCase } from '../use-case/find-one-exercises.use-case';
import { InactivateExercisesUseCase } from '../use-case/inactivate-exercises.use-case';

@Controller('exercises')
export class ExercisesController {
  constructor(
    private readonly createExercisesUseCase: CreateExercisesUseCase,
    private readonly findAllExercisesUseCase: FindAllExercisesUseCase,
    private readonly findOneExercisesUseCase: FindOneExercisesUseCase,
    private readonly updateExercisesUseCase: UpdateExercisesUseCase,
    private readonly inactivateExercisesUseCase: InactivateExercisesUseCase,
    private readonly activateExercisesUseCase: ActivateExercisesUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Teacher)
  create(@Body() createExerciseDto: CreateExerciseDto) {
    return this.createExercisesUseCase.execute(createExerciseDto);
  }

  @Get()
  @CheckRole()
  findAll() {
    return this.findAllExercisesUseCase.execute();
  }

  @Get(':id')
  @CheckRole()
  findOne(@Param('id') id: string) {
    return this.findOneExercisesUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.Teacher)
  update(
    @Param('id') id: string,
    @Body() updateExerciseDto: UpdateExerciseDto,
  ) {
    return this.updateExercisesUseCase.execute(id, updateExerciseDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Teacher)
  inactivate(@Param('id') id: string) {
    return this.inactivateExercisesUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Teacher)
  activate(@Param('id') id: string) {
    return this.activateExercisesUseCase.execute(id);
  }
}