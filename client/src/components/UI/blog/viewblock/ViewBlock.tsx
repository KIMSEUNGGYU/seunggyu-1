import Link from 'next/link';
import styled from '@emotion/styled';
import Text from 'antd/lib/typography/Text';

import { theme } from '@theme/index';
import { PostData } from '@common/types';

type Props = {
  posts: PostData[];
};

function ViewBlock({ posts }: Props) {
  return (
    <BlogBlock>
      {posts.map((post) => (
        <BlockContainer key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <a>
              <Title>{post.title}</Title>
              <DateString>{post.date}</DateString>
              <Description>{post.description}</Description>
              <Tags>
                {post.tags.split(',').map((tag, idx) => (
                  <li key={idx}>#{tag}</li>
                ))}
              </Tags>
            </a>
          </Link>
        </BlockContainer>
      ))}
    </BlogBlock>
  );
}

const BlogBlock = styled.div`
  max-width: 80%;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const BlockContainer = styled.div`
  width: 48%;
  height: 360px;
  background-color: white;
  border: 1px solid ${theme.BORDER_COLOR};
  padding: 30px 42px;
  margin-bottom: 50px;
  position: relative;
  cursor: pointer;

  transition: transform 0.3s;
  &:hover {
    box-shadow: 6px 8px 4px -1px rgba(212, 210, 212, 1);
    transform: translateY(-20px);
  }
`;
const Title = styled(Text)`
  font-size: 2em;
  font-weight: bold;
`;
const DateString = styled(Text)`
  color: ${theme.GREY_TEXT_COLOR};
  margin-left: 1em;
  font-weight: bold;
`;
const Description = styled(Text)`
  margin-top: 24px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
`;
const Tags = styled.ul`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 10px;

  & > li {
    color: ${theme.MAIN_COLOR};
    font-weight: bold;
    margin-right: 6px;
  }
`;

export default ViewBlock;
