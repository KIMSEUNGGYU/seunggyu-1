export type MenuData = "blog" | "series" | "login";

export type ViewModeData = "list" | "block";

export type Tag = {
  id: string;
  tag: string;
};

export type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

type List = {
  id: string;
  title: string;
};

export type Series = {
  title: string;
  lists: List[];
};
