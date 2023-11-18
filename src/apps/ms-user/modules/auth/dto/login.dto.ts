import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class LoginDto {
  @ApiProperty({ example: 'user@gympower.com.br' })
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: '@PasswordOfUser123' })
  password: string;
}
