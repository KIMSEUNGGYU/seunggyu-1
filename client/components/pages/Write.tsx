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
  const [postContents, setPostContents] = useState("");

  const handlePrev = () => {
    router.push("/");
  };

  const addPost = () => {
    postRepository.create(postContents);
  };

  return (
    <Editor>
      <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>
      <PostInfo />

      <TUIEditor
        imageUploader={imageUploader}
        onChange={(value) => setPostContents(value)}
      />
      <EditorMenus addPost={addPost} handlePrev={handlePrev} />
    </Editor>
  );
}
