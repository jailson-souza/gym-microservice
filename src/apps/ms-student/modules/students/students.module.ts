import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/prisma';
import { StudentsController } from './controllers/students.controller';
import { ActivateStudentsUseCase } from './use-case/activate-students.use-case';
import { CreateStudentsUseCase } from './use-case/create-students.use-case';
import { FindAllStudentsUseCase } from './use-case/find-all-students.use-case';
import { UpdateStudentsUseCase } from './use-case/update-students.use-case';
import { FindByUserIdStudentsUseCase } from './use-case/find-by-user-id-students.use-case';
import { FindByEmailStudentsUseCase } from './use-case/find-by-email-students.use-case';
import { StudentFacade } from './facades/student.facade';
import { MeStudentsController } from './controllers/me-students.controller';
import { WorkoutExternalService } from '../../external-services/workout/workout.external-service';
import { UserExternalService } from '../../external-services/users/user.external-service';
import { FindOneStudentsUseCase } from './use-case/find-one-students.use-case';
import { InactivateStudentsUseCase } from './use-case/inactivate-students.use-case';

@Module({
  controllers: [StudentsController, MeStudentsController],
  providers: [
    PrismaService,
    ActivateStudentsUseCase,
    CreateStudentsUseCase,
    FindByUserIdStudentsUseCase,
    FindByEmailStudentsUseCase,
    FindAllStudentsUseCase,
    FindOneStudentsUseCase,
    InactivateStudentsUseCase,
    UpdateStudentsUseCase,
    StudentFacade,
    WorkoutExternalService,
    UserExternalService,
  ],
})
export class StudentsModule {}
