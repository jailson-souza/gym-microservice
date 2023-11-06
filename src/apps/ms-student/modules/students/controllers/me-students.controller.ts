import { Controller, Get, Body, Patch, Req } from '@nestjs/common';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { UpdateStudentsUseCase } from '../use-case/update-students.use-case';
import { FindByUserIdStudentsUseCase } from '../use-case/find-by-user-id-students.use-case';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

@Controller('me/students')
export class MeStudentsController {
  constructor(
    private readonly updateStudentsUseCase: UpdateStudentsUseCase,
    private readonly findByUserIdStudentUseCase: FindByUserIdStudentsUseCase,
  ) {}

  @Get()
  @CheckRole(RoleEnum.STUDENT)
  findMe(@Req() req) {
    return this.findByUserIdStudentUseCase.execute(req.user.id);
  }

  @Patch()
  @CheckRole(RoleEnum.STUDENT)
  updateMe(@Req() req, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateStudentsUseCase.execute(
      req.user.student.id,
      updateStudentDto,
    );
  }
}
