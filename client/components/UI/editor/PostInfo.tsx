import styled from '@emotion/styled';
import { Input } from 'antd';

interface Props {
  setPostTitle: (title: string) => void;
  setPostTags: (tags: string) => void;
  postTitle: string;
  postTags: string;
}

export default function PostInfoCompoenent({
  setPostTitle,
  setPostTags,
  postTitle,
  postTags,
}: Props) {
  return (
    <PostInfo>
      <InputStyle
        size="large"
        placeholder="제목"
        onChange={({ target }) => setPostTitle(target.value)}
        value={postTitle}
      />
      <InputStyle
        size="large"
        placeholder="태그,"
        onChange={({ target }) => setPostTags(target.value)}
        value={postTags}
      />
    </PostInfo>
  );
}

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
  width: 50%;
`;
