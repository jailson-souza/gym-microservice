import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class ActivateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<void> {
    await this.prisma.trainingPlan.update({
      where: { id },
      data: { isActive: true },
    });
  }
}
