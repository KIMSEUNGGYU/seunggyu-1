import PostPage from "@pages/Post";
import PostRepository from "@services/post_repository";

const postRepository = new PostRepository();

import { PostData } from "@common/types";

interface Props {
  post: PostData;
}

export default function Page({ post }: Props) {
  return <PostPage post={post} />;
}

export async function getStaticPaths() {
  const data = await postRepository.read();
  const paths = data.map(({ id }: PostData) => ({
    params: { id: String(id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await postRepository.detailRead(params.id);
  return {
    props: {
      post,
    },
  };
}
