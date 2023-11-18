import { RoleEnum } from 'src/shared/models/enums/Role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class ResponseLoginSuccessDto {
  @ApiProperty({
    example: 1700343323,
    description: 'Time of expiration in seconds',
  })
  expiresIn: number;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  })
  token: string;

  @ApiProperty({
    description: 'A rules array of user',
    enum: RoleEnum,
    isArray: true,
  })
  roles: RoleEnum[];
}

export class ResponseBadRequestFieldEmptyDto {
  @ApiProperty({
    example: {
      messages: ['email should not be empty', 'password should not be empty'],
    },
  })
  messages: string[];
}

export class ResponseUnauthorizedDto {
  @ApiProperty({
    example: {
      messages: ['invalid email or password'],
    },
  })
  messages: string[];
}
