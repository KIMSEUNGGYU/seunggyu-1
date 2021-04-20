import styled from "@emotion/styled";

import ViewMode from "@blog/viewmode/ViewMode";
import ViewList from "@blog/viewlist/ViewList";
import ViewBlock from "@blog/viewblock/ViewBlock";
import Tags from "@blog/tags/Tags";
import { useState } from "react";
import { PostData, TagData } from "@common/types";

type ViewModeType = "list" | "block";

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

interface Props {
  posts: PostData[] | [];
  tags: TagData[] | [];
}

function Blog({ posts, tags }: Props) {
  const [mode, setMode] = useState(true);
  const [tagId, setTagId] = useState<string | null>(null);
  const changeViewMode = (mode: ViewModeType) => {
    mode === "list" ? setMode(true) : setMode(false);
  };

  const changeTag = (tagId: string | null) => setTagId(tagId);
  let selectedPosts = [];

  if (tagId !== null) {
    const selectedTag = tags.find((tag) => tag.id === tagId)!.tag;
    selectedPosts = posts.filter((post) => post.tags.includes(selectedTag));
  } else {
    selectedPosts = posts;
  }

  return (
    <>
      <ViewMode changeViewMode={changeViewMode} mode={mode} />
      <BlogContainer>
        {mode ? (
          <ViewList posts={selectedPosts} />
        ) : (
          <ViewBlock posts={selectedPosts} />
        )}
        <Tags tags={tags} tagId={tagId} changeTag={changeTag} />
      </BlogContainer>
    </>
  );
}

export default Blog;
