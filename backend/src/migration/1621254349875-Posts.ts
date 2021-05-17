import { MigrationInterface, QueryRunner } from 'typeorm';

export class Posts1621254349875 implements MigrationInterface {
  name = 'Posts1621254349875';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `posts` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `date` varchar(255) NOT NULL, `description` text NOT NULL, `contents` text NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `posts_tags_tags` (`postsId` int NOT NULL, `tagsId` int NOT NULL, INDEX `IDX_cf364c7e6905b285c4b55a0034` (`postsId`), INDEX `IDX_ce163a967812183a51b044f740` (`tagsId`), PRIMARY KEY (`postsId`, `tagsId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `posts_tags_tags` ADD CONSTRAINT `FK_cf364c7e6905b285c4b55a00343` FOREIGN KEY (`postsId`) REFERENCES `posts`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `posts_tags_tags` ADD CONSTRAINT `FK_ce163a967812183a51b044f7404` FOREIGN KEY (`tagsId`) REFERENCES `tags`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `posts_tags_tags` DROP FOREIGN KEY `FK_ce163a967812183a51b044f7404`',
    );
    await queryRunner.query(
      'ALTER TABLE `posts_tags_tags` DROP FOREIGN KEY `FK_cf364c7e6905b285c4b55a00343`',
    );
    await queryRunner.query('DROP INDEX `IDX_ce163a967812183a51b044f740` ON `posts_tags_tags`');
    await queryRunner.query('DROP INDEX `IDX_cf364c7e6905b285c4b55a0034` ON `posts_tags_tags`');
    await queryRunner.query('DROP TABLE `posts_tags_tags`');
    await queryRunner.query('DROP TABLE `posts`');
  }
}
