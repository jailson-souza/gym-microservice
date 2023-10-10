import { Injectable } from '@nestjs/common';
import { Student } from 'src/shared/models/Student';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByUserIdStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(userId: string): Promise<Student> {
    return this.prisma.student.findFirst({
      where: { userId },
    }) as Promise<Student>;
  }
}
