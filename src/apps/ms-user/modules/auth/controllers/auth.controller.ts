import { Controller, Post, Body } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { LoginUseCase } from '../use-case/login.use-case';
import { IsPublic } from 'src/shared/decorators/isPublic.decorator';
import {
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiUnauthorizedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import {
  ResponseBadRequestFieldEmptyDto,
  ResponseLoginSuccessDto,
  ResponseUnauthorizedDto,
} from '../dto/reponse-login.dto';

@ApiTags('Authentition')
@Controller('auth')
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  @IsPublic()
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: 200,
    description: 'When the login was to did with successs.',
    type: ResponseLoginSuccessDto,
  })
  @ApiUnauthorizedResponse({
    description: 'When the login was to did with error.',
    type: ResponseUnauthorizedDto,
  })
  @ApiBadRequestResponse({
    description: 'When the body is invalid.',
    type: ResponseBadRequestFieldEmptyDto,
  })
  login(@Body() loginDto: LoginDto) {
    return this.loginUseCase.execute(loginDto);
  }
}
