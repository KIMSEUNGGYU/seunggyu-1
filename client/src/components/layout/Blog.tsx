import Head from 'next/head';
import styled from '@emotion/styled';

import ViewMode from 'src/components/UI/blog/viewmode/ViewMode';
import ViewList from 'src/components/UI/blog/viewlist/ViewList';
import ViewBlock from 'src/components/UI/blog/viewblock/ViewBlock';
import Tags from 'src/components/UI/blog/tags/Tags';
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
      <Head>
        <title>BLOG | SEUNGGYU</title>
        <meta
          name="description"
          content="개발자 김승규의 블로그 입니다. 좋은 컨텐츠를 생산하겠습니다."
        />
        <meta name="og:title" content="SEUNGGYU" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/du4w00gvm/image/upload/v1619410321/main_image.png"
        />
        <meta
          name="og:description"
          content="개발자 김승규의 블로그 입니다. 좋은 컨텐츠를 생산하겠습니다."
        />
      </Head>
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
