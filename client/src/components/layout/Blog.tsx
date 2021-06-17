import { useState } from 'react';
import styled from '@emotion/styled';

import ViewMode from '@blog/viewmode/ViewMode';
import ViewList from '@blog/viewlist/ViewList';
import ViewBlock from '@blog/viewblock/ViewBlock';
import Tags from '@blog/tags/Tags';
import HeadWrapper from '@components/Head';

import { ViewModeData } from '@common/types';
import { BP } from '@theme/index';

type TagsData = string[] | [];

type PostData = {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string;
};

interface Props {
  postList: PostData[] | [];
  tagList: TagsData;
}

function BlogLayout({ postList, tagList }: Props) {
  const [mode, setMode] = useState<ViewModeData>('list');
  const [tagName, setTagName] = useState<string | null>(null);

  const changeViewMode = (mode: ViewModeData) => setMode(mode);
  const changeTag = (tagName: string | null) => setTagName(tagName);

  let selectedPosts = postList; // 처음에 모든 포스트 가져옴
  if (tagName !== null) {
    // tag 를 선택하면 해당 태그의 정보만 가져옴
    const selectedTag: any = tagList.find((tag) => tag === tagName);
    selectedPosts = postList.filter((post) => post.tags.split(',').includes(selectedTag));
  }

  const BlogView =
    mode === 'list' ? <ViewList posts={selectedPosts} /> : <ViewBlock posts={selectedPosts} />;

  return (
    <>
      <HeadWrapper />
      <ViewMode changeViewMode={changeViewMode} mode={mode} />
      <BlogWrapper>
        <BlogContainer>{BlogView}</BlogContainer>
        <TagContainer>
          <Tags tagList={tagList} tagName={tagName} changeTag={changeTag} />
        </TagContainer>
      </BlogWrapper>
    </>
  );
}

const BlogWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

const BlogContainer = styled.div`
  width: 80%;
  @media (max-width: ${BP.TABLET}) {
    margin: 1em;
    width: 100%;
  }
`;

const TagContainer = styled.div`
  width: 20%;
  margin-left: 40px;
  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

export default BlogLayout;
