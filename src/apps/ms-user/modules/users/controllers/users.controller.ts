import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
  HttpCode,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUsersUseCase } from '../use-case/update-users.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from '../../../../../shared/models/enums/Role.enum';
import { CreateUsersUseCase } from '../use-case/create-users.use-case';
import { ActivateUsersUseCase } from '../use-case/activate-users.use-case';
import { FindAllUsersUseCase } from '../use-case/find-all-users.use-case';
import { FindOneUsersUseCase } from '../use-case/find-one-users.use-case';
import { InactivateUsersUseCase } from '../use-case/inactivate-users.use-case';
import { DeleteRoleFromUserUseCase } from '../use-case/delete-role-from-user.use-case';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersUseCase: CreateUsersUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly findOneUsersUseCase: FindOneUsersUseCase,
    private readonly updateUsersUseCase: UpdateUsersUseCase,
    private readonly activateUsersUseCase: ActivateUsersUseCase,
    private readonly inactivateUsersUseCase: InactivateUsersUseCase,
    private readonly deleteRoleFromUserUseCase: DeleteRoleFromUserUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUsersUseCase.execute(createUserDto);
  }

  @Get()
  @CheckRole(RoleEnum.ADMIN)
  findAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Get(':id')
  @CheckRole(RoleEnum.ADMIN)
  findOne(@Param('id') id: string) {
    return this.findOneUsersUseCase.execute(id);
  }

  @Patch(':id')
  @HttpCode(204)
  @CheckRole(RoleEnum.ADMIN)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUsersUseCase.execute(id, updateUserDto);
  }

  @Patch(':id/activate')
  @HttpCode(204)
  @CheckRole(RoleEnum.ADMIN)
  activate(@Param('id') id: string) {
    return this.activateUsersUseCase.execute(id);
  }

  @Patch(':id/inactivate')
  @HttpCode(204)
  @CheckRole(RoleEnum.ADMIN)
  inactivate(@Param('id') id: string) {
    return this.inactivateUsersUseCase.execute(id);
  }

  @Delete(':id/role/:role')
  @HttpCode(204)
  @CheckRole(RoleEnum.ADMIN)
  deleteRole(@Param('id') id: string, @Param('role') role: RoleEnum) {
    return this.deleteRoleFromUserUseCase.execute({ userId: id, role });
  }
}
