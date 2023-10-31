import { Injectable } from '@nestjs/common';
import { TrainingPlan } from 'src/shared/models/TrainingPlan';

import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByStudentTrainingPlanUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(studentId: string): Promise<TrainingPlan[]> {
    studentId;
    return;
    // return this.prisma.training-plan.findMany({
    //   where: { studentId },
    //   select: {
    //     id: true,
    //     studentId: true,
    //     name: true,
    //     order: true,
    //     isActive: true,
    //     training-planExercises: {
    //       select: {
    //         id: true,
    //         order: true,
    //         exercise: {
    //           select: {
    //             id: true,
    //             name: true,
    //             isActive: true,
    //             muscleId: true,
    //             muscle: true,
    //           },
    //         },
    //       },
    //     },
    //   },
    // }) as Promise<TrainingPlan[]>;
  }
}
