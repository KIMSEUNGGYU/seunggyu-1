import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

import PostInfo from '@post/PostInfo';
import Contents from '@post/Contents';
import HeadWrapper from '@components/Head';

import { PostData } from '@common/types';
import { lightTheme, darkTheme } from '@theme/theme';
import { useTheme } from '@context/themeProvider';

interface Props {
  post: PostData;
}

function PostLayout({ post }: Props) {
  const [mode, _] = useTheme();
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <Global
        styles={css`
          body {
            background: ${theme.postBackgroundColor};
            color: ${theme.postTextColor};
          }
        `}
      />
      <HeadWrapper title={post.title} description={post.description} />
      <PostPageContainer>
        <PostInfo post={post} />
        <Contents post={post} />
      </PostPageContainer>
    </>
  );
}

const PostPageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  padding: 1em;
`;

export default PostLayout;
