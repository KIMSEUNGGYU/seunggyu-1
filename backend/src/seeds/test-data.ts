import { makeHash } from '../utils/utils';

const usersData = [
  {
    userId: 'gyu',
    password: makeHash('gyu'),
  },
  {
    userId: 'root',
    password: makeHash('root'),
  },
];

const seriesData = [
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

const postsData = [
  {
    title: '자료구조 - 스택',
    date: '2021.4.19',
    description: '자료구조 - 스택',
    tags: '자료구조',
    contents: '자료구조 - 스택',
  },
  {
    title: '자료구조 - 큐',
    date: '2021.4.19',
    description: '자료구조 - 큐',
    tags: '자료구조',
    contents: '자료구조 - 큐',
  },
  {
    title: '자료구조 - 링크드리스트',
    date: '2021.4.19',
    description: '자료구조 - 링크드리스트',
    tags: '자료구조',
    contents: '자료구조 - 링크드리스트',
  },
  {
    title: '브라우저 렌더링 1 - DOM',
    date: '2021.4.19',
    description: '브라우저 렌더링 1 - DOM',
    tags: '브라우저',
    contents: '브라우저 렌더링 1 - DOM',
  },
];

const tagsData = [{ name: '자료구조' }, { name: '브라우저' }];

export { usersData, seriesData, postsData, tagsData };
