export type MenuData = 'blog' | 'series' | 'login';

export type ViewModeData = 'list' | 'block';

// export type TagData = {
//   id: string;
//   name: string;
// };

// export interface PostData {
//   id?: string;
//   title: string;
//   date: string;
//   description: string;
//   contents: string;
//   tags: TagData[];
// }

export type TagData = string[];

export interface PostData {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string[];
}

export interface GetPostData {
  id: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string[];
}

export interface ImageUploader {
  upload: (file: any) => any;
}

//  id: 7, title: '자료구조', postId: '11', postTitle: '자료구조 - 스택'
type SeriesPostData = {
  id: string;
  title: string;
  postId: string;
  postTitle: string;
};

export type SeriesData = {
  title?: string;
  seriesList: SeriesPostData[];
};
