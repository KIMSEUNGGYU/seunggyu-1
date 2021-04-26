import PostPage from 'src/components/pages/Post';
import PostRepository from '@services/post_repository';

const postRepository = new PostRepository();

import { PostData } from '@common/types';
import { GetServerSidePropsContext } from 'next';

interface Props {
  post: PostData;
}

export default function Page({ post }: Props) {
  return <PostPage post={post} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (typeof context.query.id == 'string') {
    const post = await postRepository.detailRead(context.query.id);
    return {
      props: { post: { ...post, tags: post.tags.toString() } },
    };
  }
}
