export type MenuData = 'blog' | 'series' | 'login';

export type ViewModeData = 'list' | 'block';

export type TagData = string[];

export interface PostData {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string;
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

// ---

export type PostTag = {
  tags: string;
};

export type TagsData = {
  tags: string[] | [];
};
