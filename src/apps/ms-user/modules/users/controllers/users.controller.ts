import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUsersUseCase: CreateUsersUseCase,
    private readonly findAllUsersUseCase: FindAllUsersUseCase,
    private readonly findOneUsersUseCase: FindOneUsersUseCase,
    private readonly updateUsersUseCase: UpdateUsersUseCase,
    private readonly activateUsersUseCase: ActivateUsersUseCase,
    private readonly inactivateUsersUseCase: InactivateUsersUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Admin)
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUsersUseCase.execute(createUserDto);
  }

  @Get()
  @CheckRole(RoleEnum.Admin)
  findAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Get(':id')
  @CheckRole(RoleEnum.Admin)
  findOne(@Param('id') id: string) {
    return this.findOneUsersUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.Admin)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.updateUsersUseCase.execute(id, updateUserDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Admin)
  inactivate(@Param('id') id: string) {
    return this.inactivateUsersUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Admin)
  activate(@Param('id') id: string) {
    return this.activateUsersUseCase.execute(id);
  }
}
