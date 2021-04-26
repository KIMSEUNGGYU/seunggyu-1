import Blog from '@pages/Blog';
import { PostData, TagData } from '@common/types';
import PostRepository from '@services/post_repository';

const postRepository = new PostRepository();

interface Props {
  posts: PostData[] | [];
  tags: TagData[] | [];
}

export default function Home({ posts, tags }: Props) {
  return <Blog posts={posts} tags={tags} />;
}

export async function getServerSideProps() {
  let posts = await postRepository.read();
  const tags = await postRepository.getTags();

  posts = posts.map((post: PostData) => ({
    ...post,
    tags: post['tags'].toString(),
  }));

  return {
    props: {
      posts,
      tags,
    },
  };
}
