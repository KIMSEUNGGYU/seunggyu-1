import Blog from '@components/layout/Blog';
import { TagData } from '@common/types';
import PostRepository from '@services/post_repository';

const postRepository = new PostRepository();

type PostData = {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: TagData[];
};

interface Props {
  posts: PostData[] | [];
  tags: TagData[] | [];
}

export default function Home({ posts, tags }: Props) {
  return <Blog posts={posts} tags={tags} />;
}

export async function getServerSideProps() {
  let posts = await postRepository.read();
  let tags = await postRepository.getTags();
  // tags = tags.map((tag) => tag.name);
  // console.log(tags);

  posts = posts.map((post: PostData) => {
    const tag = post['tags'][0];
    return {
      ...post,
      tags: tag.name,
    };
  });

  return {
    props: {
      posts,
      tags,
    },
  };
}
