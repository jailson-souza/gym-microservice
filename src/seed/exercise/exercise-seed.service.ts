import * as data from '../data.json';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/utils/prisma';

@Injectable()
export class ExerciseSeedService {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    const exercisesMappeds = data.reduce((acc, { exercises }) => {
      return exercises?.length > 0 ? [...acc, ...exercises] : [...acc];
    }, []);
    const exercises = await this.prisma.exercise.findMany({
      where: { id: { in: exercisesMappeds.map(({ id }) => id) } },
      select: { id: true, name: true },
    });
    const newExercises = exercisesMappeds
      .filter(({ id }) => !exercises.some((m) => m.id === id))
      ?.map(({ id, name, muscleId, image }) => ({
        id,
        name,
        muscleId,
        image: `https://raw.githubusercontent.com/jailson-souza/gym-microservice/main/images/${image}`,
      }));
    if (newExercises?.length > 0) {
      await this.prisma.exercise.createMany({ data: newExercises });
    }
  }
}
