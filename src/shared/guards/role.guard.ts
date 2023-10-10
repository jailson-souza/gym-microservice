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

    if (!allowedRoles.includes(user.role)) {
      throw new ForbiddenException(
        'you dont have permission to access this resource',
      );
    }

    return true;
  }
}
