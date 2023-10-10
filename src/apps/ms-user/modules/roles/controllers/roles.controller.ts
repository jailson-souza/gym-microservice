import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { ActivateRolesUseCase } from '../use-case/activate-roles.use-case';
import { CheckRole } from 'src/shared/decorators/checkRole.decorator';
import { RoleEnum } from '../../../../../shared/models/enums/Role.enum';
import { CreateRolesUseCase } from '../use-case/create-roles.use-case';
import { FindAllRolesUseCase } from '../use-case/find-all-roles.use-case';
import { FindOneRolesUseCase } from '../use-case/find-one-roles.use-case';
import { InactivateRolesUseCase } from '../use-case/inactivate-roles.use-case';
import { UpdateRolesUseCase } from '../use-case/update-roles.use-case';

@Controller('roles')
export class RolesController {
  constructor(
    private readonly createRolesUseCase: CreateRolesUseCase,
    private readonly findAllRolesUseCase: FindAllRolesUseCase,
    private readonly findOneRolesUseCase: FindOneRolesUseCase,
    private readonly updateRolesUseCase: UpdateRolesUseCase,
    private readonly activateRolesUseCase: ActivateRolesUseCase,
    private readonly inactivateRolesUseCase: InactivateRolesUseCase,
  ) {}

  @Post()
  @CheckRole(RoleEnum.Admin)
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.createRolesUseCase.execute(createRoleDto);
  }

  @Get()
  @CheckRole(RoleEnum.Admin)
  findAll() {
    return this.findAllRolesUseCase.execute();
  }

  @Get(':id')
  @CheckRole(RoleEnum.Admin)
  findOne(@Param('id') id: string) {
    return this.findOneRolesUseCase.execute(id);
  }

  @Patch(':id')
  @CheckRole(RoleEnum.Admin)
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.updateRolesUseCase.execute(id, updateRoleDto);
  }

  @Delete(':id')
  @CheckRole(RoleEnum.Admin)
  inactivate(@Param('id') id: string) {
    return this.inactivateRolesUseCase.execute(id);
  }

  @Patch(':id/activate')
  @CheckRole(RoleEnum.Admin)
  activate(@Param('id') id: string) {
    return this.activateRolesUseCase.execute(id);
  }
}
