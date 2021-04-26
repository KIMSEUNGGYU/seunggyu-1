import { PostData } from '@common/types';
import styled from '@emotion/styled';
import { Input } from 'antd';

interface Props {
  post: PostData;
  setPost: (post: PostData) => void;
}

export default function PostInfoCompoenent({ post, setPost }: Props) {
  return (
    <PostInfo>
      <InputStyle
        size="large"
        placeholder="제목"
        onChange={({ target }) => setPost({ ...post, title: target.value })}
        value={post.title}
      />
      <InputStyle
        size="large"
        placeholder="태그,"
        onChange={({ target }) => setPost({ ...post, tags: target.value })}
        value={post.tags}
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
