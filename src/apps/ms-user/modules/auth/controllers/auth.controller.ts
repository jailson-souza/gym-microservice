import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { LoginUseCase } from '../use-case/login.use-case';
import { IsPublic } from 'src/shared/decorators/isPublic.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @IsPublic()
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
}
