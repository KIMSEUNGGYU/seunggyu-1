import styled from "@emotion/styled";
import { Input } from "antd";

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
  width: 50%;
`;

interface Props {
  setPostTitle: (title: string) => void;
  setPostTags: (tags: string) => void;
}

export default function PostInfoCompoenent({
  setPostTitle,
  setPostTags,
}: Props) {
  return (
    <PostInfo>
      <InputStyle
        size="large"
        placeholder="제목"
        onChange={({ target }) => setPostTitle(target.value)}
      />
      <InputStyle
        size="large"
        placeholder="태그,"
        onChange={({ target }) => setPostTags(target.value)}
      />
    </PostInfo>
  );
}
