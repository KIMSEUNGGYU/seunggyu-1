import Blog from "@pages/Blog";
import { PostData } from "@common/types";
import PostRepository from "@services/post_repository";
const postRepository = new PostRepository();

interface Props {
  test: string;
  posts: PostData[] | [];
}

export default function Home({ test, posts }: Props) {
  // console.log(test, posts);
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
