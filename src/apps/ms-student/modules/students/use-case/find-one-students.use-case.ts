import { Injectable } from '@nestjs/common';
import { Student } from 'prisma';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneStudentsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(studentId: string): Promise<Student> {
    return this.prisma.student.findUnique({
      where: { id: studentId },
      select: {
        id: true,
        userId: true,
        name: true,
        email: true,
        dateOfBirth: true,
        gender: true,
        heightInMt: true,
        weightInKg: true,
        createdAt: true,
        trainingPlans: {
          where: {
            isActive: true,
          },
          select: {
            id: true,
            name: true,
            createdByUserId: true,
            createdAt: true,
            createdByUser: {
              select: {
                name: true,
              },
            },
            trainings: {
              where: { isActive: true },
              select: {
                id: true,
                name: true,
                order: true,
                createdAt: true,
                trainingExercises: {
                  select: {
                    id: true,
                    exerciseId: true,
                    intervalInSeconds: true,
                    createdAt: true,
                    exercise: {
                      select: {
                        id: true,
                        name: true,
                        description: true,
                        image: true,
                        muscleId: true,
                        muscle: {
                          select: {
                            id: true,
                            name: true,
                          },
                        },
                      },
                    },
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
