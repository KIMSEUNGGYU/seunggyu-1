import styled from "@emotion/styled";

import Header from "@UI/header/Header";
import ViewMode from "@UI/viewmode/ViewMode";
import ViewList from "@UI/viewlist/ViewList";
import Tags from "@components/UI/Tags/Tags";
import { posts } from "@data/data";

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const BlogLists = styled.ul`
  width: 80%;
`;

function Blog() {
  return (
    <>
      <Header />
      <ViewMode />
      <BlogContainer>
        <BlogLists>
          {posts.map((post) => (
            <ViewList post={post} />
          ))}
        </BlogLists>
        <Tags />
      </BlogContainer>
    </>
  );
}

export default Blog;
