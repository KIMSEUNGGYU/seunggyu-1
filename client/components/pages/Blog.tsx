import styled from '@emotion/styled';

import ViewMode from '@blog/viewmode/ViewMode';
import ViewList from '@blog/viewlist/ViewList';
import ViewBlock from '@blog/viewblock/ViewBlock';
import Tags from '@blog/tags/Tags';
import { useState } from 'react';
import { PostData, TagData, ViewModeData } from '@common/types';

interface Props {
  posts: PostData[] | [];
  tags: TagData[] | [];
}

function Blog({ posts, tags }: Props) {
  const [mode, setMode] = useState<ViewModeData>('list');
  const [tagId, setTagId] = useState<string | null>(null);
  const changeViewMode = (mode: ViewModeData) => setMode(mode);

  const changeTag = (tagId: string | null) => setTagId(tagId);
  let selectedPosts = posts; // 처음에 모든 포스트 가져옴

  if (tagId !== null) {
    // tag 를 선택하면 해당 태그의 정보만 가져옴
    const selectedTag = tags.find((tag) => tag.id === tagId)!.name;
    selectedPosts = posts.filter((post) => post.tags.includes(selectedTag));
  }

  return (
    <>
      <ViewMode changeViewMode={changeViewMode} mode={mode} />
      <BlogContainer>
        {mode === 'list' ? <ViewList posts={selectedPosts} /> : <ViewBlock posts={selectedPosts} />}
        <Tags tags={tags} tagId={tagId} changeTag={changeTag} />
      </BlogContainer>
    </>
  );
}

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
`;

export default Blog;
