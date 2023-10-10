import { Injectable } from '@nestjs/common';
import { Student } from 'src/shared/models/Student';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByEmailStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(email: string): Promise<Student> {
    return this.prisma.student.findUnique({
      where: { email },
    }) as Promise<Student>;
  }
}
