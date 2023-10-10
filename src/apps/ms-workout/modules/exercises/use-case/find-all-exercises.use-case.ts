import { Injectable } from '@nestjs/common';
import { Exercise } from 'src/shared/models/Exercise';
import { PrismaService } from 'src/shared/utils/prisma';

@Injectable()
export class FindAllExercisesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  execute(): Promise<Exercise[]> {
    return this.prisma.exercise.findMany({
      select: {
        id: true,
        name: true,
        isActive: true,
        muscleId: true,
        muscle: {
          select: {
            name: true,
          },
        },
      },
    });
  }
}
