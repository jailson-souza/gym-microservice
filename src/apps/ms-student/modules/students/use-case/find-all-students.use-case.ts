import { Injectable } from '@nestjs/common';
import { Student } from 'src/shared/models/Student';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<Student[]> {
    return this.prisma.student.findMany() as Promise<Student[]>;
  }
}
