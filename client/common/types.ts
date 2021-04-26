export type MenuData = 'blog' | 'series' | 'login';

export type ViewModeData = 'list' | 'block';

export type TagData = {
  id: string;
  name: string;
};

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
};

export type SeriesData = {
  title: string;
  lists: SeriesPostData[];
};
