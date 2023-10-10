import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

type Payload = {
  sub: string;
  iat: number;
  exp: number;
};

type JwtDecoded = {
  error?: string;
  payload?: Payload;
};

@Injectable()
export class Jwt {
  constructor(
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  sign(payload?: { sub?: string; [key: string]: any }) {
    return this.jwt.signAsync(payload, {
      secret: this.config.get('SECRET_KEY'),
      expiresIn: '1h',
    });
  }

  async verify(token: string): Promise<JwtDecoded> {
    try {
      const payload = await this.jwt.verifyAsync(token, {
        secret: this.config.get('SECRET_KEY'),
      });
      return { payload };
    } catch (e) {
      return { error: e.message };
    }
  }

  decode(token: string): Payload {
    return this.jwt.decode(token) as Payload;
  }
}
