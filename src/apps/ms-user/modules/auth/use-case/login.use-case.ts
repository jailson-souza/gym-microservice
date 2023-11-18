import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { ResponseLoginSuccessDto } from '../dto/reponse-login.dto';
import { Jwt } from 'src/shared/utils/jwt';
import { comparePassword } from 'src/shared/utils/libs/encryptor.lib';
import { FindByEmailUsersUseCase } from '../../users/use-case/find-by-email-users.use-case';

@Injectable()
export class LoginUseCase {
  constructor(
    private readonly findByEmailUsersUseCase: FindByEmailUsersUseCase,
    private readonly jwt: Jwt,
  ) {}

  async execute(login: LoginDto): Promise<ResponseLoginSuccessDto> {
    const findedUser = await this.findByEmailUsersUseCase.execute(
      login.email.toLowerCase(),
    );

    if (!findedUser || !findedUser.isActive) {
      throw new UnauthorizedException('invalid email or password');
    }

    const passwordIsValid = await comparePassword(
      login.password,
      findedUser.password,
    );

    if (!passwordIsValid) {
      throw new UnauthorizedException('invalid email or password');
    }

    delete findedUser.password;

    const token = await this.jwt.sign({ sub: findedUser.id });
    const { exp: expiresIn } = this.jwt.decode(token);
    return {
      expiresIn,
      token,
      roles: findedUser?.userRoles?.map((userRole) => userRole.role),
    };
  }
}
