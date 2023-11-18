import { Controller, Get, Req } from '@nestjs/common';
import { UpdateUsersUseCase } from '../use-case/update-users.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindOneUsersUseCase } from '../use-case/find-one-users.use-case';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('me/users')
export class MeUsersController {
  constructor(
    private readonly findOneUsersUseCase: FindOneUsersUseCase,
    private readonly updateUsersUseCase: UpdateUsersUseCase,
  ) {}

  @Get()
  @CheckRole()
  findMe(@Req() req) {
    return this.findOneUsersUseCase.execute(req.user.id);
  }
}
