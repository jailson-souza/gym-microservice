import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { Workout } from 'src/shared/models/Workout';
import { CreateWorkoutDto } from '../dto/create-workout.dto';

@Injectable()
export class CreateWorkoutsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateWorkoutDto): Promise<Workout> {
    const { exercises, ...workout } = input;

    await this.verifyExistingWorkout(input.name);
    const workoutCreated = await this.prisma.workout.create({ data: workout });

    const workoutExercises = exercises.map((exerciseId, index) => ({
      workoutId: workoutCreated.id,
      exerciseId,
      order: index + 1,
    }));

    for await (const item of workoutExercises) {
      await this.prisma.workoutExercise.create({ data: item });
    }

    return workoutCreated as Workout;
  }

  private async verifyExistingWorkout(name: string) {
    const workout = await this.prisma.workout.findFirst({
      where: { name, isActive: true },
      select: { id: true, name: true },
    });
    if (workout) {
      throw new ConflictException('workout is already exist');
    }
  }
}
