import Blog from '@layout/Blog';
import PostRepository from '@services/post_repository';

const postRepository = new PostRepository();

type PostData = {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string[];
};

interface Props {
  postList: PostData[] | [];
  tags: string[] | [];
}

export default function Home({ postList, tagList }: Props) {
  console.log(postList, tagList);
  return <Blog postList={postList} tagList={tagList} />;
}

export async function getServerSideProps() {
  const postList = await postRepository.read();
  let tagList = await postRepository.getTags();
  tagList = tagList.map((tag: any) => tag.name);

  return {
    props: {
      postList,
      tagList,
    },
  };
}
