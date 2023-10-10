import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class UpdateStudentDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
