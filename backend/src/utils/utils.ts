import { hashSync } from 'bcrypt';

export function makeHash(data: string) {
  const hashedData = hashSync(data, 10);
  return hashedData;
}
