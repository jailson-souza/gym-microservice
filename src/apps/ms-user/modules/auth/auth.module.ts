import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { LoginUseCase } from './use-case/login.use-case';
import { PrismaService } from 'src/shared/utils/prisma';
import { Jwt } from 'src/shared/utils/jwt';
import { JwtService } from '@nestjs/jwt';
import { FindByEmailUsersUseCase } from '../users/use-case/find-by-email-users.use-case';

@Module({
  controllers: [AuthController],
  providers: [
    Jwt,
    JwtService,
    PrismaService,
    LoginUseCase,
    FindByEmailUsersUseCase,
  ],
})
export class AuthModule {}
