import { Injectable } from '@nestjs/common';
import { UpdateWorkoutDto } from '../dto/update-workout.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';

@Injectable()
export class UpdateWorkoutsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateWorkoutDto): Promise<void> {
    const data = removePropertyNotAllowed(input, ['name', 'order']);
    await this.prisma.workout.update({ where: { id }, data });
  }
}
