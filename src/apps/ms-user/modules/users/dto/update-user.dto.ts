import { IsNotEmpty, IsEmail, IsOptional, IsEnum } from 'class-validator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsEnum(RoleEnum, { each: true })
  roles?: RoleEnum[];
}
