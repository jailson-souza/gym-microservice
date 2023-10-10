import { hash, compare } from 'bcrypt';

export async function encryptPassword(password: string) {
  return hash(password, 10);
}

export async function comparePassword(
  password: string,
  encryptedPassword: string,
) {
  return compare(password, encryptedPassword);
}
