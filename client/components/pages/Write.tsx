import { useRouter } from "next/router";
import { useState } from "react";

import TUIEditor from "@ui/editor/TUIEditor";
import ImageUploaderImpl from "@services/image_uploader";
import PostRepositoryImpl from "@services/post_repository";
import EditorMenus from "@ui/editor/EditorMenu";
import PostInfo from "@ui/editor/PostInfo";
import styled from "@emotion/styled";

const imageUploader = new ImageUploaderImpl();
const postRepository = new PostRepositoryImpl();

const Editor = styled.div`
  padding: 20px;
`;

export default function WritePage() {
  const router = useRouter();
  const [postTitle, setPostTitle] = useState("");
  const [postTags, setPostTags] = useState("");
  const [postContents, setPostContents] = useState("");

  const handlePrev = () => {
    router.push("/");
  };

  const addPost = () => {
    if (!(postTitle && postTags && postContents)) {
      alert("모든 내용을 입력해주세요");
      return;
    }

    postRepository
      .create({
        title: postTitle,
        date: "2021.04.07",
        description: "test description",
        tags: [postTags],
        content: postContents,
      })
      .then((res) => {
        console.log(res);
        alert("포스트 작성 성공");
        router.push("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Editor>
      <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>
      <PostInfo setPostTitle={setPostTitle} setPostTags={setPostTags} />

      <TUIEditor
        imageUploader={imageUploader}
        onChange={(value) => setPostContents(value)}
      />
      <EditorMenus addPost={addPost} handlePrev={handlePrev} />
    </Editor>
  );
}
