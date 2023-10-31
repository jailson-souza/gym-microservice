import { Injectable } from '@nestjs/common';
import { TrainingPlan } from 'src/shared/models/TrainingPlan';

import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<TrainingPlan> {
    id;
    return;
    // return this.prisma.training-plan.findUnique({
    //   where: { id },
    //   select: {
    //     id: true,
    //     studentId: true,
    //     name: true,
    //     order: true,
    //     isActive: true,
    //     training-planExercises: {
    //       select: {
    //         id: true,
    //         exercise: {
    //           select: {
    //             id: true,
    //             name: true,
    //             muscleId: true,
    //             isActive: true,
    //             muscle: true,
    //           },
    //         },
    //       },
    //     },
    //   },
    // }) as Promise<TrainingPlan>;
  }
}
