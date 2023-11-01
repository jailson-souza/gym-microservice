import { Injectable } from '@nestjs/common';
import { MuscleSeedService } from './muscle/muscle-seed.service';

@Injectable()
export class SeedService {
  constructor(private readonly muscleSeedService: MuscleSeedService) {}

  async run() {
    await this.muscleSeedService.run();
  }
}
