import { Injectable } from '@nestjs/common';
import { Student } from 'prisma';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<Student> {
    return this.prisma.student.findUnique({
      where: { id },
      select: {
        id: true,
        userId: true,
        name: true,
        email: true,
        gender: true,
        dateOfBirth: true,
        heightInMt: true,
        weightInKg: true,
        isActive: true,
        createdAt: true,
        trainingPlan: {
          where: {
            isActive: true,
          },
          select: {
            id: true,
            name: true,
            order: true,
            isActive: true,
            createdAt: true,
            trainingPlanExercise: {
              select: {
                id: true,
                order: true,
                intervalInSeconds: true,
                createdAt: true,
                exercise: {
                  select: {
                    id: true,
                    name: true,
                    description: true,
                    isActive: true,
                    createdAt: true,
                  },
                },
              },
            },
          },
        },
      },
    }) as Promise<Student>;
  }
}
