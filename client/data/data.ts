// type Tag = {
//   tag: string;
// };

type Tag = string;
type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

const tags: Tag[] = ["전체 보기", "자료 구조", "리액트", "브라우저"];

const posts: Post[] = [
  {
    id: 1,
    title: "자료구조 - 스택",
    date: "2021.04.07",
    description:
      "스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.스택은 LIFO 구조로 콜스택에서 자주 사용합니다.",
    tags: ["자료구조", "스택"],
  },
  {
    id: 2,
    title: "자료구조 - 큐",
    date: "2021.04.07",
    description:
      "큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. 큐는 FIFO 구조입니다. ",
    tags: ["자료구조", "큐"],
  },
  {
    id: 3,
    title: "브라우저 렌더링 방법 - DOM, BOM",
    date: "2021.04.08",
    description:
      "브라우저는 HTML 파일을 요청하고 해당 파일을 수신합니다. 수신된 HTML 파일을 브라우저에 로딩합니다, 브라우저에 로딩하면 브라우저에서 HTML tag 들을 이용하여 DOM Tree 를 만들고 DOM Tree 와 Style 정보들으 합쳐 CSSOM 을 만듭니다.",
    tags: ["브라우저"],
  },
  {
    id: 4,
    title: "브라우저 렌더링 방법 - CSSOM",
    date: "2021.04.010",
    description:
      "브라우저는 HTML 파일을 요청하고 해당 파일을 수신합니다. 수신된 HTML 파일을 브라우저에 로딩합니다, 브라우저에 로딩하면 브라우저에서 HTML tag 들을 이용하여 DOM Tree 를 만들고 DOM Tree 와 Style 정보들으 합쳐 CSSOM 을 만듭니다. ",
    tags: ["브라우저"],
  },
];

export { tags, posts };
