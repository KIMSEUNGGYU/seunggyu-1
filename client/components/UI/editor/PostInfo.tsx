import styled from "@emotion/styled";
import { Typography, Input } from "antd";

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
  width: 50%;
`;

export default function PostInfoCompoenent() {
  return (
    <PostInfo>
      <InputStyle size="large" placeholder="제목" />
      <InputStyle size="large" placeholder="태그," />
    </PostInfo>
  );
}
