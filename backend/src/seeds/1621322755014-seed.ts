import { MigrationInterface, QueryRunner } from 'typeorm';
// import { usersData, seriesData, postsData, tagsData } from './real-data';
import { usersData, seriesData, postsData, tagsData } from './test-data';

// Seed Data
const getUsers = () => usersData;
const getSeries = () => seriesData;
const getPosts = () => postsData;
const tagsList = tagsData;

export class seed1620994092793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = await getUsers();
    users.forEach(async ({ userId, password }) => {
      await queryRunner.query('INSERT INTO users (userId, password) VALUES (?, ?)', [
        userId,
        password,
      ]);
    });

    const series = getSeries();
    series.forEach(async ({ title, postId, postTitle }) => {
      await queryRunner.query('INSERT INTO series (title, postId, postTitle) VALUES (?, ?, ?)', [
        title,
        postId,
        postTitle,
      ]);
    });

    tagsList.forEach(async ({ name }) => {
      await queryRunner.query('INSERT INTO tags(name) VALUES (?)', [name]);
    });

    const posts = getPosts();
    posts.forEach(async ({ title, date, description, contents, tags }) => {
      const tagsId = await queryRunner.query(`SELECT tags.id FROM tags WHERE name="${tags}"`);
      await queryRunner.query(
        'INSERT INTO posts (title, date, description, contents, tagsId) VALUES (?, ?, ?, ?, ?)',
        [title, date, description, contents, tagsId[0].id],
      );
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM users');
    await queryRunner.query('DELETE FROM series');
    await queryRunner.query('DELETE FROM posts');
    await queryRunner.query('DELETE FROM tags');
  }
}
