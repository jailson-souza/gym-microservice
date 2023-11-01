import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { allowedRolesKey } from '../decorators/checkRole.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { isPublicKey } from '../decorators/isPublic.decorator';
import { UserRole } from '../models/UserRole';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(isPublicKey, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const allowedRoles = this.reflector.getAllAndOverride<RoleEnum[]>(
      allowedRolesKey,
      [context.getHandler(), context.getClass()],
    );

    if (!allowedRoles) {
      throw new ForbiddenException(
        'you dont have permission to access this resource',
      );
    }

    if (!allowedRoles?.length) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    const roles: RoleEnum[] = user?.userRoles?.map(
      (userRole: UserRole) => userRole.role,
    );

    if (roles.some((role) => allowedRoles.includes(role))) {
      return true;
    }

    throw new ForbiddenException(
      'you dont have permission to access this resource',
    );
  }
}
