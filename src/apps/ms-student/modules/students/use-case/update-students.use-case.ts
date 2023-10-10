import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';

@Injectable()
export class UpdateStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateStudentDto): Promise<void> {
    const data = removePropertyNotAllowed(input, [
      'name',
      'email',
      'dateOfBirth',
      'gender',
      'height',
      'weight',
    ]);
    await this.prisma.student.update({ where: { id }, data });
  }
}
