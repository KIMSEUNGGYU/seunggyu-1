import { MigrationInterface, QueryRunner } from 'typeorm';

export class Series1621024664546 implements MigrationInterface {
  name = 'Series1621024664546';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `series` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `postId` varchar(255) NOT NULL, `postTitle` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `series`');
  }
}
