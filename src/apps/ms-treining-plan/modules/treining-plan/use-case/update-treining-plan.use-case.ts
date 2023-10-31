import { Injectable } from '@nestjs/common';
import { UpdateTrainingPlanDto } from '../dto/update-treining-plan.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import {} from 'src/shared/utils/libs/remove-property-not-allowed';

@Injectable()
export class UpdateTrainingPlansUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateTrainingPlanDto): Promise<void> {
    id;
    input;
    return;
    // const data = removePropertyNotAllowed(input, ['name', 'order']);
    // (await this.prisma.training) - plan.update({ where: { id }, data });
  }
}
