import { useRouter } from "next/router";

import PostPage from "@pages/Post";
import PostRepository from "@services/post_repository";

const postRepository = new PostRepository();

import { PostData } from "@common/types";
import { GetServerSidePropsContext } from "next";

interface Props {
  post: PostData;
}

export default function Page({ post }: Props) {
  const router = useRouter();

  const deletePost = async (postId: string) => {
    const response = await postRepository.deletePost(postId);
    if (response && response.status === 200) {
      alert("삭제 성공");
      router.push("/");
      return;
    }

    alert("삭제 실패");
  };

  return <PostPage post={post} deletePost={deletePost} />;
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
