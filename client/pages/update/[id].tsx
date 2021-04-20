import { useRouter } from "next/router";

import WritePage from "@pages/Write";
import PostRepository from "@services/post_repository";

const postRepository = new PostRepository();

import { PostData } from "@common/types";
import { GetServerSidePropsContext } from "next";

interface Props {
  post: PostData;
}

export default function Page({ post }: Props) {
  return <WritePage post={post} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  if (typeof context.query.id == "string") {
    const post = await postRepository.detailRead(context.query.id);
    return {
      props: { post },
    };
  }
}
// export async function getStaticPaths() {
//   const data = await postRepository.read();
//   const paths = data.map(({ id }: PostData) => ({
//     params: { id: String(id) },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const post = await postRepository.detailRead(params.id);
//   return {
//     props: {
//       post,
//     },
//   };
// }
