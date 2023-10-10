import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateRoleDto {
  @IsOptional()
  @IsNotEmpty()
  name?: string;
}
