import { SeriesData } from '@common/types';

const series: SeriesData[] = [
  {
    title: '브라우저',
    lists: [
      {
        id: '1',
        title: '브라우저 렌더링 1 - DOM, BOM',
      },
      {
        id: '2',
        title: '브라우저 렌더링 2 - CSSOM 과 Render Tree',
      },
      {
        id: '3',
        title: '브라우저 렌더링 3 - CRP',
      },
      {
        id: '4',
        title: '이벤트 루프 0 - 이벤트',
      },
      {
        id: '5',
        title: '이벤트 루프 1 - 프로세스와 쓰레드',
      },
      {
        id: '6',
        title: '이벤트 루프 2 - 브라우저 런타임 환경',
      },
    ],
  },
  {
    title: '자료구조',
    lists: [
      {
        id: '11',
        title: '자료구조 - 스택',
      },
      {
        id: '12',
        title: '자료구조 - 큐',
      },
    ],
  },
];

export { series };
