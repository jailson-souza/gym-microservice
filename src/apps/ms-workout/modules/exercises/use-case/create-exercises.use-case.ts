import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { Exercise } from 'src/shared/models/Exercise';
import { CreateExerciseDto } from '../dto/create-exercise.dto';

@Injectable()
export class CreateExercisesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: CreateExerciseDto): Promise<Exercise> {
    await this.verifyExistingExercise(input.name);
    const exercise = await this.prisma.exercise.create({ data: input });
    return exercise as Exercise;
  }

  private async verifyExistingExercise(name: string) {
    const exercise = await this.prisma.exercise.findFirst({
      where: { name, isActive: true },
      select: { id: true, name: true },
    });
    if (exercise) {
      throw new ConflictException('exercise is already exist');
    }
  }
}
