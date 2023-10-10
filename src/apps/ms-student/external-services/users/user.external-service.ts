import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import axios from 'axios';
import { User } from 'src/shared/models/User';

@Injectable()
export class UserExternalService {
  private baseURL: string = this.config.get('API_URL_USERS');

  constructor(
    private readonly config: ConfigService,

    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  async getThisUser(): Promise<User> {
    const response = await axios.get(`${this.baseURL}/me/users`, {
      headers: { Authorization: this.getAuthorization() },
    });
    return response.data;
  }

  private getAuthorization() {
    return this.request.headers['authorization'];
  }
}
