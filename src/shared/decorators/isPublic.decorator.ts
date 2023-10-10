import { SetMetadata } from '@nestjs/common';

export const isPublicKey = 'isPublic';
export const IsPublic = () => SetMetadata(isPublicKey, true);
