import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { REQUEST } from '@nestjs/core';
import { Student } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class StudentExternalService {
  private baseURL: string = this.config.get('API_URL_STUDENTS');

  constructor(
    private readonly config: ConfigService,

    @Inject(REQUEST)
    private readonly request: Request,
  ) {}

  async getStudentOfThisUser(): Promise<Student> {
    const response = await axios.get(`${this.baseURL}/students/me`, {
      headers: { Authorization: this.getAuthorization() },
    });
    return response.data;
  }

  private getAuthorization() {
    return this.request.headers['authorization'];
  }
}
