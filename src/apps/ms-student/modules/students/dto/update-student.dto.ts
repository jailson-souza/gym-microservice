import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsEnum,
  IsDateString,
  IsNumber,
} from 'class-validator';
import { IsDateFormat } from 'src/shared/decorators/IsDateFormat.decorator';
import { GenderEnum } from 'src/shared/models/enums/Gender.enum';

export class UpdateStudentDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsDateFormat('yyyy-mm-dd')
  @IsDateString()
  dateOfBirth?: Date;

  @IsOptional()
  @IsEnum(GenderEnum)
  gender?: GenderEnum;

  @IsOptional()
  @IsNumber()
  heightInMt?: number;

  @IsOptional()
  @IsNumber()
  weightInKg?: number;
}
