import styled from "@emotion/styled";

import Header from "@header/Header";
import ViewMode from "@blog/viewmode/ViewMode";
import ViewList from "@blog/viewlist/ViewList";
import ViewBlock from "@blog/viewblock/ViewBlock";
import Tags from "@blog/tags/Tags";
import { posts, tags } from "@data/data";
import { useState } from "react";

type ViewModeType = "list" | "block";

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

function Blog() {
  const [mode, setMode] = useState(true);
  const changeViewMode = (mode: ViewModeType) => {
    mode === "list" ? setMode(true) : setMode(false);
  };

  return (
    <>
      <Header />
      <ViewMode changeViewMode={changeViewMode} mode={mode} />
      <BlogContainer>
        {mode ? <ViewList posts={posts} /> : <ViewBlock posts={posts} />}
        <Tags tags={tags} />
      </BlogContainer>
    </>
  );
}

export default Blog;
