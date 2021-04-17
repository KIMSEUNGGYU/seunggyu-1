import { Button } from "antd";
import styled from "@emotion/styled";
import { theme } from "@theme/index";

const EditorMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  background-color: white;
  border: 1px solid ${theme.BORDER_COLOR};
`;

const PrevButton = styled.button`
  border: none;
  outline: none;
  background-color: white;
  color: grey;
  font-weight: bold;
  margin-left: 30px;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    background-color: ${theme.BACKGROUND_COLOR};
  }
`;

interface Props {
  addPost: () => void;
  handlePrev: () => void;
}

export default function EditorMenuCompoenent({ addPost, handlePrev }: Props) {
  return (
    <EditorMenu>
      <PrevButton onClick={() => handlePrev()}> {"← 나가기"}</PrevButton>
      <Button type="primary" onClick={addPost}>
        작성하기
      </Button>
    </EditorMenu>
  );
}
