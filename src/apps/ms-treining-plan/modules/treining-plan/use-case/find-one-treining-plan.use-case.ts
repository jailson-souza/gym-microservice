import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string) {
    return this.prisma.trainingPlan.findUnique({
      where: { id },
      include: {
        createdByUser: {
          select: {
            id: true,
            name: true,
          },
        },
        student: {
          select: {
            id: true,
            name: true,
            dateOfBirth: true,
            gender: true,
            heightInMt: true,
            weightInKg: true,
            isActive: true,
            createdAt: true,
          },
        },
        trainings: {
          include: {
            trainingExercises: {
              include: {
                exercise: {
                  include: {
                    muscle: true,
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
