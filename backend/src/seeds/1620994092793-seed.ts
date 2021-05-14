import { MigrationInterface, QueryRunner } from 'typeorm';
import { makeHash } from '../utils/utils';

const getUsers = async () => {
  return [
    {
      userId: 'gyu',
      password: await makeHash('gyu'),
    },
    {
      userId: 'root',
      password: await makeHash('root'),
    },
  ];
};

export class seed1620994092793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = await getUsers();
    users.forEach(async ({ userId, password }) => {
      await queryRunner.query('INSERT INTO users (userId, password) VALUES (?, ?)', [
        userId,
        password,
      ]);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM users');
  }
}
