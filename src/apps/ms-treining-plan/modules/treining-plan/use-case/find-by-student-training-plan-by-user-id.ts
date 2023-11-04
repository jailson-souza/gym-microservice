import { Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';

import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByStudentTrainingPlanByUserIdUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(userId: string): Promise<TrainingPlan[]> {
    return this.prisma.trainingPlan.findMany({
      select: {
        id: true,
        studentId: true,
        name: true,
        order: true,
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
        trainingPlanExercise: {
          where: {
            isActive: true,
          },
          select: {
            id: true,
            order: true,
            intervalInSeconds: true,
            isActive: true,
            exercise: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
