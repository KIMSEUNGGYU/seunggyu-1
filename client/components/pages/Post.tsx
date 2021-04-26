import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

import PostInfo from '@post/PostInfo';
import Contents from '@post/Contents';
import { PostData } from '@common/types';

interface Props {
  post: PostData;
}

function PostPage({ post }: Props) {
  return (
    <>
      <Global styles={globalStyle} />
      <PostPageContainer>
        <PostInfo post={post} />
        <Contents post={post} />
      </PostPageContainer>
    </>
  );
}

const globalStyle = css`
  body {
    background-color: white;
    margin: 0;
  }
`;

const PostPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export default PostPage;
