import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";

import Header from "@header/Header";
import PostInfo from "@post/PostInfo";
import Contents from "@post/Contents";

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
  /* justify-content: space-between; */
  margin-top: 60px;
`;

function PostPage() {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <PostPageContainer>
        <PostInfo />
        <Contents />
      </PostPageContainer>
    </>
  );
}

export default PostPage;
