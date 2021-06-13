import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { PostData } from '@common/types';
import { theme } from '@theme/index';
import Button from 'antd/lib/button';
import Text from 'antd/lib/typography/Text';

import { isLoginState } from '@state/index';
import PostRepository from '@services/post_repository';
const postRepository = new PostRepository();

interface Props {
  post: PostData;
}

function Info({ post }: Props) {
  const router = useRouter();
  const isLogin = useRecoilValue(isLoginState);

  const deletePost = async (postId: string) => {
    const response = await postRepository.deletePost(postId);
    if (response && response.status === 200) {
      alert('삭제 성공');
      router.push('/');
      return;
    }

    alert('삭제 실패');
  };

  return (
    <PostInfo>
      <Title>{post.title}</Title>
      <div>
        <DateString type="secondary">{post.date}</DateString>
        {isLogin && (
          <div>
            <Button size="small" onClick={() => router.push(`/update/${post.id}`)}>
              수정
            </Button>
            <Button size="small" onClick={() => deletePost(post.id!)}>
              삭제
            </Button>
          </div>
        )}
      </div>
      <Tags>
        {post.tags.split(',').map((tag, idx) => (
          <Tag key={idx}>#{tag}</Tag>
        ))}
      </Tags>
    </PostInfo>
  );
}

const PostInfo = styled.div`
  width: 100%;

  & > div {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  Button + Button {
    margin-left: 10px;
    align-self: center;
  }
`;

const Title = styled(Text)`
  font-size: 2em;
  margin-right: 1em;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
`;

const DateString = styled(Text)`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bold;
`;

const Tags = styled.ul`
  display: flex;
`;

const Tag = styled.li`
  color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  margin-right: 6px;
  list-style: none;
  margin-left: 0;
  padding: 0;
`;

export default Info;
