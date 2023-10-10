import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { ActivateStudentsUseCase } from '../use-case/activate-students.use-case';
import { CreateStudentsUseCase } from '../use-case/create-students.use-case';
import { FindAllStudentsUseCase } from '../use-case/find-all-students.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { UpdateStudentsUseCase } from '../use-case/update-students.use-case';
import { StudentFacade } from '../facades/student.facade';
import { FindOneStudentsUseCase } from '../use-case/find-one-students.use-case';
import { InactivateStudentsUseCase } from '../use-case/inactivate-students.use-case';

@Controller('students')
export class StudentsController {
  constructor(
    private readonly createStudentsUseCase: CreateStudentsUseCase,
    private readonly findAllStudentsUseCase: FindAllStudentsUseCase,
    private readonly findOneStudentsUseCase: FindOneStudentsUseCase,
    private readonly updateStudentsUseCase: UpdateStudentsUseCase,
    private readonly activateStudentsUseCase: ActivateStudentsUseCase,
    private readonly inactivateStudentsUseCase: InactivateStudentsUseCase,
    private readonly studentFacade: StudentFacade,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Teacher)
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.createStudentsUseCase.execute(createStudentDto);
  }

  @Get()
  @CheckRole(RoleEnum.Teacher)
  findAll() {
    return this.findAllStudentsUseCase.execute();
  }

  @Get(':id')
  @CheckRole(RoleEnum.Teacher)
  findOne(@Param('id') id: string) {
    return this.findOneStudentsUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.Teacher)
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateStudentsUseCase.execute(id, updateStudentDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Teacher)
  inactivate(@Param('id') id: string) {
    return this.inactivateStudentsUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Teacher)
  activate(@Param('id') id: string) {
    return this.activateStudentsUseCase.execute(id);
  }
}