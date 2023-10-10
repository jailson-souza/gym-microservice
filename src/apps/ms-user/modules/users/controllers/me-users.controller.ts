import { Controller, Get, Body, Patch, Req } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUsersUseCase } from '../use-case/update-users.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { FindOneUsersUseCase } from '../use-case/find-one-users.use-case';

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
  @Patch()
  @CheckRole()
  update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUsersUseCase.execute(req.user.id, updateUserDto);
  }
}
