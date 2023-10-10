import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateWorkoutDto } from '../dto/create-workout.dto';
import { UpdateWorkoutDto } from '../dto/update-workout.dto';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { UpdateWorkoutsUseCase } from '../use-case/update-workouts.use-case';
import { ActivateWorkoutsUseCase } from '../use-case/activate-workouts.use-case';
import { CreateWorkoutsUseCase } from '../use-case/create-workouts.use-case';
import { FindAllWorkoutsUseCase } from '../use-case/find-all-workouts.use-case';
import { FindOneWorkoutsUseCase } from '../use-case/find-one-workouts.use-case';
import { InactivateWorkoutsUseCase } from '../use-case/inactivate-workouts.use-case';

@Controller('workouts')
export class WorkoutsController {
  constructor(
    private readonly createWorkoutsUseCase: CreateWorkoutsUseCase,
    private readonly findAllWorkoutsUseCase: FindAllWorkoutsUseCase,
    private readonly findOneWorkoutsUseCase: FindOneWorkoutsUseCase,
    private readonly updateWorkoutsUseCase: UpdateWorkoutsUseCase,
    private readonly inactivateWorkoutsUseCase: InactivateWorkoutsUseCase,
    private readonly activateWorkoutsUseCase: ActivateWorkoutsUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Teacher)
  create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.createWorkoutsUseCase.execute(createWorkoutDto);
  }

  @Get()
  @CheckRole(RoleEnum.Teacher)
  findAll() {
    return this.findAllWorkoutsUseCase.execute();
  }

  @Get(':id')
  @CheckRole(RoleEnum.Teacher)
  findOne(@Param('id') id: string) {
    return this.findOneWorkoutsUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.Teacher)
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.updateWorkoutsUseCase.execute(id, updateWorkoutDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Teacher)
  inactivate(@Param('id') id: string) {
    return this.inactivateWorkoutsUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Teacher)
  activate(@Param('id') id: string) {
    return this.activateWorkoutsUseCase.execute(id);
  }
}
