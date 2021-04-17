import Blog from "@pages/Blog";
import { PostData } from "@common/types";
import PostRepository from "@services/post_repository";
const postRepository = new PostRepository();

interface Props {
  posts: PostData[] | [];
}

export default function Home({ posts }: Props) {
  return <Blog posts={posts} />;
}

export async function getStaticProps() {
  const posts = await postRepository.read();

  return {
    props: {
      posts,
    },
  };
}
