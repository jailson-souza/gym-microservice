import { ConflictException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from '../dto/create-student.dto';
import { PrismaService } from 'src/shared/utils/prisma';
import { stringToDate, dateToSQL } from 'src/shared/utils/libs/date.lib';
import { CreateUsersUseCase } from 'src/apps/ms-user/modules/users/use-case/create-users.use-case';
import { RoleEnum } from 'src/shared/models/enums/Role.enum';

@Injectable()
export class CreateStudentsUseCase {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createUsersUseCase: CreateUsersUseCase,
  ) {}

  async execute(input: CreateStudentDto) {
    await this._verifyExistingStudent(input.email);
    const user = await this._getOrCreateUser({
      email: input.email,
      name: input.name,
    });
    Object.assign(input, { userId: user.id });
    input.dateOfBirth = dateToSQL(stringToDate(String(input?.dateOfBirth)));
    input.email = input.email.toLowerCase();
    return this.prisma.student.create({ data: input });
  }

  private async _verifyExistingStudent(email: string) {
    const student = await this.prisma.student.findUnique({
      where: { email },
      select: { id: true, email: true },
    });
    if (student) {
      throw new ConflictException('student is already exist');
    }
  }
  private async _getOrCreateUser({ email, name }) {
    const user = await this.prisma.user.findFirst({ where: { email } });
    if (user) {
      return user;
    }
    return await this.createUsersUseCase.execute({
      email,
      name,
      password: null,
      roles: [RoleEnum.STUDENT],
    });
  }
}
