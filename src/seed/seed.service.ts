import { Injectable } from '@nestjs/common';
import { MuscleSeedService } from './muscle/muscle-seed.service';
import { ExerciseSeedService } from './exercise/exercise-seed.service';
import { UserSeedService } from './user/user.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly muscleSeedService: MuscleSeedService,
    private readonly exerciseSeedService: ExerciseSeedService,
    private readonly userSeed: UserSeedService,
  ) {}

  async run() {
    await this.muscleSeedService.run();
    await this.exerciseSeedService.run();
    await this.userSeed.run();
  }
}
