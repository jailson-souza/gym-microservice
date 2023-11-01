import { Injectable } from '@nestjs/common';
import { MuscleSeedService } from './muscle/muscle-seed.service';
import { ExerciseSeedService } from './exercise/exercise-seed.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly muscleSeedService: MuscleSeedService,
    private readonly exerciseSeedService: ExerciseSeedService,
  ) {}

  async run() {
    await this.muscleSeedService.run();
    await this.exerciseSeedService.run();
  }
}
