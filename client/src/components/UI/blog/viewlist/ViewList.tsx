import Link from 'next/link';
import styled from '@emotion/styled';
import Text from 'antd/lib/typography/Text';

import { BP } from '@theme/index';

type PostData = {
  id?: string;
  title: string;
  date: string;
  description: string;
  contents: string;
  tags: string;
};

interface Props {
  posts: PostData[];
}

function ViewList({ posts }: Props) {
  const PostList = posts.map((post) => (
    <ListContainer key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <a>
          <ListTitleBlock>
            <Title>{post.title}</Title>
            <DateString type="secondary">{post.date}</DateString>
          </ListTitleBlock>
          <Description>{post.description}</Description>
          <Tags>
            {post.tags.split(',').map((tag: any, idx) => (
              <li key={idx}>#{tag}</li>
            ))}
          </Tags>
        </a>
      </Link>
    </ListContainer>
  ));

  return <ul>{PostList}</ul>;
}

const ListContainer = styled.li`
  background-color: ${({ theme }) => theme.listBoxColor};
  border: ${({ theme }) => theme.border};
  padding: 18px 42px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow};
    transform: translateY(-20px);
  }
`;

const ListTitleBlock = styled.div`
  display: flex;
  align-items: flex-end;
  @media (max-width: ${BP.TABLET}) {
    flex-direction: column;
    align-items: flex-start;

    span:nth-of-type(1) {
      font-size: 1.1rem;
    }
    span:nth-of-type(2) {
      font-size: 0.7rem;
    }
  }
`;

const Title = styled(Text)`
  font-size: 2em;
  margin-right: 1em;
  font-weight: bold;
`;

const DateString = styled(Text)`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bold;
`;

const Description = styled(Text)`
  margin-top: 6px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

const Tags = styled.ul`
  margin-top: 3px;
  display: flex;

  & > li {
    color: ${({ theme }) => theme.mainColor};
    font-weight: bold;
    margin-right: 6px;
  }

  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

export default ViewList;
