import { GetServerSidePropsContext } from 'next';

import PostRepository from '@services/post_repository';
const postRepository = new PostRepository();

export { default } from '@layout/Post';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (typeof context.query.id == 'string') {
    const post = await postRepository.detailRead(context.query.id);
    const parsePost = { ...post, tags: post.tags.name };
    return {
      props: { post: parsePost },
    };
  }
}
