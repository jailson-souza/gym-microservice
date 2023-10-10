import { Muscle } from '@prisma/client';

export type Exercise = {
  id?: string;
  name: string;
  muscleId: string;
  muscle?: Partial<Muscle>;
};
