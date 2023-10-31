import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { CreateTrainingPlanDto } from '../dto/create-treining-plan.dto';
import { UpdateTrainingPlanDto } from '../dto/update-treining-plan.dto';
import { ActivateTrainingPlansUseCase } from '../use-case/activate-treining-plan.use-case';
import { CreateTrainingPlansUseCase } from '../use-case/create-treining-plan.use-case';
import { FindAllTrainingPlansUseCase } from '../use-case/find-all-treining-plan.use-case';
import { FindOneTrainingPlansUseCase } from '../use-case/find-one-treining-plan.use-case';
import { InactivateTrainingPlansUseCase } from '../use-case/inactivate-treining-plan.use-case';
import { UpdateTrainingPlansUseCase } from '../use-case/update-treining-plan.use-case';

@Controller('training-plan')
export class TrainingPlansController {
  constructor(
    private readonly createTrainingPlansUseCase: CreateTrainingPlansUseCase,
    private readonly findAllTrainingPlansUseCase: FindAllTrainingPlansUseCase,
    private readonly findOneTrainingPlansUseCase: FindOneTrainingPlansUseCase,
    private readonly updateTrainingPlansUseCase: UpdateTrainingPlansUseCase,
    private readonly inactivateTrainingPlansUseCase: InactivateTrainingPlansUseCase,
    private readonly activateTrainingPlansUseCase: ActivateTrainingPlansUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Teacher)
  create(@Body() createTrainingPlanDto: CreateTrainingPlanDto) {
    return this.createTrainingPlansUseCase.execute(createTrainingPlanDto);
  }

  @Get()
  @CheckRole(RoleEnum.Teacher)
  findAll() {
    return this.findAllTrainingPlansUseCase.execute();
  }

  @Get(':id')
  @CheckRole(RoleEnum.Teacher)
  findOne(@Param('id') id: string) {
    return this.findOneTrainingPlansUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.Teacher)
  update(
    @Param('id') id: string,
    @Body() updateTrainingPlanDto: UpdateTrainingPlanDto,
  ) {
    return this.updateTrainingPlansUseCase.execute(id, updateTrainingPlanDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Teacher)
  inactivate(@Param('id') id: string) {
    return this.inactivateTrainingPlansUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Teacher)
  activate(@Param('id') id: string) {
    return this.activateTrainingPlansUseCase.execute(id);
  }
}
