import { Controller, Get, Body, Patch, Req } from '@nestjs/common';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { UpdateStudentsUseCase } from '../use-case/update-students.use-case';
import { FindByUserIdStudentsUseCase } from '../use-case/find-by-user-id-students.use-case';

@Controller('me/students')
export class MeStudentsController {
  constructor(
    private readonly updateStudentsUseCase: UpdateStudentsUseCase,
    private readonly findByUserIdStudentUseCase: FindByUserIdStudentsUseCase,
  ) {}

  @Get()
  @CheckRole()
  findMe(@Req() req) {
    return this.findByUserIdStudentUseCase.execute(req.user.id);
  }

  @Patch()
  @CheckRole()
  updateMe(@Req() req, @Body() updateStudentDto: UpdateStudentDto) {
    return this.updateStudentsUseCase.execute(
      req.user.studentId,
      updateStudentDto,
    );
  }
}
