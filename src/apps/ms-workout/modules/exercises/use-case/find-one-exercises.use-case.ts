import { Injectable } from '@nestjs/common';
import { Exercise } from 'src/shared/models/Exercise';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindOneExercisesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(id: string): Promise<Exercise> {
    return this.prisma.exercise.findUnique({
      where: { id },
      include: {
        muscle: true,
      },
    }) as Promise<Exercise>;
  }
}
