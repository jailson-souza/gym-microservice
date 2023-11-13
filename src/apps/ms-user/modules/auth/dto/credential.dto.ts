import { RoleEnum } from 'src/shared/models/enums/Role.enum';

export class CredentialDto {
  expiresIn: number;
  token: string;
  roles: RoleEnum[];
}
