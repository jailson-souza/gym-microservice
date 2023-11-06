import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { stringToDate, dateToSQL } from 'src/shared/utils/libs/date.lib';

@Injectable()
export class CreateStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateStudentDto) {
    input.dateOfBirth = dateToSQL(stringToDate(String(input?.dateOfBirth)));
    await this.verifyExistingStudent(input.email);
    input.email = input.email.toLowerCase();
    return this.prisma.student.create({ data: input });
  }

  private async verifyExistingStudent(email: string) {
    const student = await this.prisma.student.findUnique({
      where: { email },
      select: { id: true, email: true },
    });
    if (student) {
      throw new ConflictException('student is already exist');
    }
  }
}
