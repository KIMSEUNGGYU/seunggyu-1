import { MigrationInterface, QueryRunner } from 'typeorm';
import { makeHash } from '../utils/utils';

// Seed Data
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

const getSeries = () => {
  return [
    {
      title: '브라우저',
      postId: '1',
      postTitle: '브라우저 렌더링 1 - DOM, BOM',
    },
    {
      title: '브라우저',
      postId: '2',
      postTitle: '브라우저 렌더링 2 - CSSOM 과 Render Tree',
    },
    {
      title: '브라우저',
      postId: '3',
      postTitle: '브라우저 렌더링 3 - CRP',
    },
    {
      title: '브라우저',
      postId: '4',
      postTitle: '이벤트 루프 0 - 이벤트',
    },
    {
      title: '브라우저',
      postId: '5',
      postTitle: '이벤트 루프 1 - 프로세스와 쓰레드',
    },
    {
      title: '브라우저',
      postId: '6',
      postTitle: '이벤트 루프 2 - 브라우저 런타임 환경',
    },
    {
      title: '자료구조',
      postId: '11',
      postTitle: '자료구조 - 스택',
    },
    {
      title: '자료구조',
      postId: '12',
      postTitle: '자료구조 - 큐',
    },
    {
      title: '자료구조',
      postId: '13',
      postTitle: '자료구조 - 링크드 리스트',
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

    const series = getSeries();
    series.forEach(async ({ title, postId, postTitle }) => {
      await queryRunner.query('INSERT INTO series (title, postId, postTitle) VALUES (?, ?, ?)', [
        title,
        postId,
        postTitle,
      ]);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE FROM users');
    // await queryRunner.query('DELETE FROM series');
  }
}
