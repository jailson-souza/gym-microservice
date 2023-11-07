// import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { RoleGuard } from 'src/shared/guards/role.guard';
// import { RequestLoggerMiddleware } from 'src/shared/middlewares/request-logger.middlere';
import { Jwt } from '../jwt';
import { PrismaService } from '../prisma';
import { Logger } from '../logger';
import { FindOneUsersUseCase } from 'src/apps/ms-user/modules/users/use-case/find-one-users.use-case';
import { APP_GUARD } from '@nestjs/core';

export abstract class GlobalModule /* implements NestModule*/ {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  // }

  static imports() {
    return [JwtModule, ConfigModule.forRoot({ isGlobal: true })];
  }

  static providers() {
    return [
      Logger,
      PrismaService,
      ConfigService,
      Jwt,
      FindOneUsersUseCase,
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
      {
        provide: APP_GUARD,
        useClass: RoleGuard,
      },
    ];
  }
}
