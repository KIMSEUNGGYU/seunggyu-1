import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTable1622071078008 implements MigrationInterface {
  name = 'createTable1622071078008';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `tags` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `posts` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `date` varchar(255) NOT NULL, `description` text NOT NULL, `contents` text NOT NULL, `tagsId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `series` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `postId` varchar(255) NOT NULL, `postTitle` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `userId` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, UNIQUE INDEX `IDX_8bf09ba754322ab9c22a215c91` (`userId`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `posts` ADD CONSTRAINT `FK_d1666d09cf2d63567af3cda7870` FOREIGN KEY (`tagsId`) REFERENCES `tags`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `posts` DROP FOREIGN KEY `FK_d1666d09cf2d63567af3cda7870`',
    );
    await queryRunner.query('DROP INDEX `IDX_8bf09ba754322ab9c22a215c91` ON `users`');
    await queryRunner.query('DROP TABLE `users`');
    await queryRunner.query('DROP TABLE `series`');
    await queryRunner.query('DROP TABLE `posts`');
    await queryRunner.query('DROP TABLE `tags`');
  }
}
