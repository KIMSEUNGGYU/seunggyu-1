import { FC } from "react";
import styled from "@emotion/styled";
import { PostData } from "@common/types";
// import { Viewer, ViewerProps } from "@toast-ui/react-editor";
import TUIViewer from "@ui/editor/TUIViewer";

const TemporaryBox = styled.div`
  margin-top: 75px;
`;

interface Props {
  post: PostData;
}

const Contents: FC = ({ post }: Props) => {
  return (
    <TemporaryBox>
      <TUIViewer contents={post.content} />
    </TemporaryBox>
  );
};

export default Contents;
