import { Injectable } from '@nestjs/common';
import { UpdateExerciseDto } from '../dto/update-exercise.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { removePropertyNotAllowed } from 'src/shared/utils/libs/remove-property-not-allowed';

@Injectable()
export class UpdateExercisesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string, input: UpdateExerciseDto): Promise<void> {
    const data = removePropertyNotAllowed(input, ['name', 'muscleId']);
    await this.prisma.exercise.update({ where: { id }, data });
  }
}
