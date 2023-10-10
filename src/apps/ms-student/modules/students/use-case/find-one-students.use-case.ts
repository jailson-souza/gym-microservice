import { Injectable } from '@nestjs/common';
import { Student } from 'src/shared/models/Student';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<Student> {
    return this.prisma.student.findUnique({
      where: { id },
    }) as Promise<Student>;
  }
}
