import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { isPublicKey } from '../decorators/isPublic.decorator';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { Jwt } from 'src/shared/utils/jwt';
import { FindOneUsersUseCase } from 'src/apps/ms-user/modules/users/use-case/find-one-users.use-case';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwt: Jwt,
    private findOneUsersUseCase: FindOneUsersUseCase,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<RoleEnum[]>(isPublicKey, [
      context.getHandler(),
      context.getClass(),
    ]);

    const httpArgumentsHost = context.switchToHttp();

    if (isPublic) {
      return true;
    }

    const request = httpArgumentsHost.getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('token is required');
    }

    const { payload, error } = await this.jwt.verify(token);
    if (error) {
      this.throwExceptionFromMessage(error);
    }
    const user = await this.findOneUsersUseCase.execute(payload.sub);
    request.user = user;
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private throwExceptionFromMessage(message: string) {
    if (message === 'jwt expired') {
      throw new UnauthorizedException('token is expired');
    }
    throw new UnauthorizedException('token is invalid');
  }
}
