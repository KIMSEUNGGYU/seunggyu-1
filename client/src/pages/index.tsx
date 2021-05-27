import Blog from '@layout/Blog';
import PostRepository from '@services/post_repository';

const postRepository = new PostRepository();

type PostData = {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string;
};

interface Props {
  postList: PostData[] | [];
  tagList: string[] | [];
}

export default function Home({ postList, tagList }: Props) {
  return <Blog postList={postList} tagList={tagList} />;
}

export async function getServerSideProps() {
  const postList = await postRepository.read();
  const parsePostList = postList.map((post: any) => ({ ...post, tags: post.tags.name }));

  let tagList = await postRepository.getTags();
  tagList = tagList.map((tag: any) => tag.name);

  return {
    props: {
      postList: parsePostList,
      tagList,
    },
  };
}
