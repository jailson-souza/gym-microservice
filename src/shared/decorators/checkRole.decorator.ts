import { SetMetadata } from '@nestjs/common';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

export const allowedRolesKey = 'allowedRoles';
export const CheckRole = (...roles: RoleEnum[]) =>
  SetMetadata(allowedRolesKey, roles);
