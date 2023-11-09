import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';
import { dateToSQL, stringToDate } from 'src/shared/utils/libs/date.lib';

@Injectable()
export class UpdateStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(studentId: string, input: UpdateStudentDto): Promise<void> {
    const data = removePropertyNotAllowed(input, [
      'name',
      'email',
      'dateOfBirth',
      'gender',
      'height',
      'weight',
    ]);

    try {
      if (input.dateOfBirth) {
        input.dateOfBirth = dateToSQL(stringToDate(String(input?.dateOfBirth)));
      }
      await this.prisma.student.update({ where: { id: studentId }, data });
    } catch (error) {
      console.log(error);
    }
  }
}
