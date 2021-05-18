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
  posts: PostData[] | [];
  tags: string[] | [];
}

export default function Home({ posts, tags }: Props) {
  return <Blog posts={posts} tags={tags} />;
}

export async function getServerSideProps() {
  let posts = await postRepository.read();
  let tags = await postRepository.getTags();
  tags = tags.map((tag: any) => tag.name);

  return {
    props: {
      posts,
      tags,
    },
  };
}
