import { hash } from 'bcrypt';

export async function makeHash(data: string) {
  // return 'password';
  const hashedData = await hash(data, 10);
  return hashedData;
}
