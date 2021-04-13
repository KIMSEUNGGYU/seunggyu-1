import styled from "@emotion/styled";

import Header from "@UI/header/Header";
import ViewMode from "@UI/viewmode/ViewMode";
import ViewList from "@UI/viewlist/ViewList";
import ViewBlock from "@UI/viewblock/ViewBlock";
import Tags from "@components/UI/tags/Tags";
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
