import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { StudentsController } from './controllers/students.controller';
import { ActivateStudentsUseCase } from './use-case/activate-students.use-case';
import { FindAllStudentsUseCase } from './use-case/find-all-students.use-case';
import { UpdateStudentsUseCase } from './use-case/update-students.use-case';
import { FindByUserIdStudentsUseCase } from './use-case/find-by-user-id-students.use-case';
import { FindByEmailStudentsUseCase } from './use-case/find-by-email-students.use-case';
import { MeStudentsController } from './controllers/me-students.controller';
import { FindOneStudentsUseCase } from './use-case/find-one-students.use-case';
import { InactivateStudentsUseCase } from './use-case/inactivate-students.use-case';
import { CreateUsersUseCase } from 'src/apps/ms-user/modules/users/use-case/create-users.use-case';
import { AddRoleToUserUseCase } from 'src/apps/ms-user/modules/users/use-case/add-role-to-user.use-case';

@Module({
  controllers: [StudentsController, MeStudentsController],
  providers: [
    PrismaService,
    ActivateStudentsUseCase,
    FindByUserIdStudentsUseCase,
    FindByEmailStudentsUseCase,
    FindAllStudentsUseCase,
    FindOneStudentsUseCase,
    InactivateStudentsUseCase,
    UpdateStudentsUseCase,
    CreateUsersUseCase,
    AddRoleToUserUseCase,
  ],
})
export class StudentsModule {}
