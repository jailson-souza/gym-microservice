import { IsNotEmpty, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsEnum(RoleEnum, { each: true })
  roles: RoleEnum[];
}
