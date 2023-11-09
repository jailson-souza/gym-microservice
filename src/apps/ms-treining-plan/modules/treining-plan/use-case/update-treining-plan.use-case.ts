import { Injectable } from '@nestjs/common';
import { UpdateTrainingPlanDto } from '../dto/update-treining-plan.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';

@Injectable()
export class UpdateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateTrainingPlanDto) {
    const data = removePropertyNotAllowed(input, ['name', 'objective']);
    await this.prisma.trainingPlan.update({ where: { id }, data });
  }
}
