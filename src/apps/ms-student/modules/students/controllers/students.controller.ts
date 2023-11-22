import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { ActivateStudentsUseCase } from '../use-case/activate-students.use-case';
import { FindAllStudentsUseCase } from '../use-case/find-all-students.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { UpdateStudentsUseCase } from '../use-case/update-students.use-case';
import { FindOneStudentsUseCase } from '../use-case/find-one-students.use-case';
import { InactivateStudentsUseCase } from '../use-case/inactivate-students.use-case';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly findAllStudentsUseCase: FindAllStudentsUseCase,
    private readonly findOneStudentsUseCase: FindOneStudentsUseCase,
    private readonly updateStudentsUseCase: UpdateStudentsUseCase,
    private readonly activateStudentsUseCase: ActivateStudentsUseCase,
    private readonly inactivateStudentsUseCase: InactivateStudentsUseCase,
  ) {}

  @Get()
  @CheckRole(RoleEnum.TEACHER)
  findAll(@Query('limit') limit: string, @Query('page') page: string) {
    return this.findAllStudentsUseCase.execute({
      limit: +limit,
      page: +page,
    });
  }

  @Get(':id')
  @CheckRole(RoleEnum.TEACHER)
  findOne(@Param('id') id: string) {
    return this.findOneStudentsUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.TEACHER)
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateStudentsUseCase.execute(id, updateStudentDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.TEACHER)
  inactivate(@Param('id') id: string) {
    return this.inactivateStudentsUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.TEACHER)
  activate(@Param('id') id: string) {
    return this.activateStudentsUseCase.execute(id);
  }
}
