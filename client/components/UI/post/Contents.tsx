import { FC } from "react";
import styled from "@emotion/styled";
import { PostData } from "@common/types";
// import { Viewer, ViewerProps } from "@toast-ui/react-editor";
import TUIViewer from "@ui/editor/TUIViewer";

const TemporaryBox = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`;

interface Props {
  post: PostData;
}

function Contents({ post }: Props) {
  return (
    <TemporaryBox>
      <TUIViewer contents={post.contents} />
    </TemporaryBox>
  );
}

export default Contents;
