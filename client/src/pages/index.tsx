import PostRepository from '@services/post_repository';
const postRepository = new PostRepository();

export { default } from '@layout/Blog';

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
