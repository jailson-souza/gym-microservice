import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

interface InputStart {
  studentId: string;
  trainingId: string;
}

@Injectable()
export class StartTrainingUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: InputStart) {
    const { trainingId, studentId } = input;

    const training = await this.prisma.training.findFirst({
      where: { id: trainingId, trainingPlan: { studentId } },
      select: { id: true, trainingPlan: { select: { studentId: true } } },
    });

    if (!training) {
      throw new NotFoundException(
        'training not found or does not belong to you',
      );
    }

    const trainingHistory = await this.prisma.trainingHistory.findFirst({
      where: {
        NOT: { startDate: null },
        endDate: null,
      },
      include: {
        training: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (trainingHistory) {
      throw new ConflictException(
        `the training ${trainingHistory.training.name} has not yet been completed`,
      );
    }

    await this.prisma.trainingHistory.create({
      data: {
        trainingId,
      },
    });
  }
}
