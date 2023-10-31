import { Injectable } from '@nestjs/common';
import { TrainingPlanHistory } from 'src/shared/models/TrainingPlanHistory';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindByStudentTrainingPlanHistoryUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(studentId: string): Promise<TrainingPlanHistory[]> {
    studentId;
    return;
    // return (this.prisma.training -
    //   planHistory.findMany({
    //     where: { studentId },
    //   })) as Promise<TrainingPlanHistory[]>;
  }
}
