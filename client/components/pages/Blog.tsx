import styled from "@emotion/styled";

import Header from "@UI/header/Header";
import ViewMode from "@UI/viewmode/ViewMode";
import ViewList from "@UI/viewlist/ViewList";
import ViewBlock from "@UI/viewblock/ViewBlock";
import Tags from "@components/UI/tags/Tags";
import { posts, tags } from "@data/data";

// type ViewModeType = "list" | "block";
// const initMode = {
//   list: false,
//   block: false,
// };

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

function Blog() {
  return (
    <>
      <Header />
      <ViewMode />
      <BlogContainer>
        {/* <ViewList posts={posts} /> */}
        <ViewBlock posts={posts} />
        <Tags tags={tags} />
      </BlogContainer>
    </>
  );
}

export default Blog;
