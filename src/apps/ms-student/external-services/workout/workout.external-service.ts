import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import axios from 'axios';
import { Workout } from 'src/shared/models/Workout';

@Injectable()
export class WorkoutExternalService {
  private baseURL: string = this.config.get('API_URL_WORKOUTS');

  constructor(
    private readonly config: ConfigService,

    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  async getWorkoutOfThisUser(): Promise<Workout[]> {
    const response = await axios.get(`${this.baseURL}/me/workouts`, {
      headers: { Authorization: this.getAuthorization() },
    });
    return response.data;
  }

  private getAuthorization() {
    return this.request.headers['authorization'];
  }
}
