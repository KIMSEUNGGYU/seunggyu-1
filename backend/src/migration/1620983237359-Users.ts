import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1620983237359 implements MigrationInterface {
  name = 'Users1620983237359';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `userId` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_8bf09ba754322ab9c22a215c91` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP INDEX `IDX_8bf09ba754322ab9c22a215c91` ON `users`');
    await queryRunner.query('DROP TABLE `users`');
  }
}
