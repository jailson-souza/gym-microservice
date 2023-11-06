import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByStudentTrainingPlanByUserIdUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(userId: string) {
    return this.prisma.trainingPlan.findMany({
      select: {
        id: true,
        studentId: true,
        name: true,
        objective: true,
        createdByUserId: true,
        isActive: true,
        createdAt: true,
        student: {
          select: {
            user: {
              where: {
                id: userId,
              },
              select: {
                id: true,
              },
            },
          },
        },
        trainings: {
          select: {
            id: true,
            name: true,
            order: true,
            isActive: true,
            createdAt: true,
            trainingExercises: {
              select: {
                id: true,
                order: true,
                intervalInSeconds: true,
                isActive: true,
                exercise: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                    description: true,
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
    });
  }
}
