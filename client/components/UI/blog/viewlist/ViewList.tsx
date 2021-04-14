import { FC } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import { theme } from "@theme/index";
import { PostData } from "@common/types";
import { Typography } from "antd";
const { Text } = Typography;

interface Props {
  posts: PostData[];
}

const BlogLists = styled.ul`
  max-width: 80%;
`;
const ListContainer = styled.li`
  background-color: white;
  border: 1px solid ${theme.BORDER_COLOR};
  padding: 18px 42px;
  margin-bottom: 40px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    box-shadow: 6px 8px 4px -1px rgba(212, 210, 212, 1);
    transform: translateY(-20px);
  }
`;

const ListTitleBlock = styled.div`
  display: flex;
  align-items: flex-end;
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
  margin-top: 6px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Tags = styled.ul`
  margin-top: 3px;
  display: flex;

  & > li {
    color: ${theme.MAIN_COLOR};
    font-weight: bold;
    margin-right: 6px;
  }
`;

const ViewList: FC<Props> = ({ posts }) => {
  return (
    <>
      <BlogLists>
        {posts.map((post, idx) => (
          <Link href={`/posts/${post.id}`}>
            <a>
              <ListContainer key={post.id}>
                <ListTitleBlock>
                  <Title>{post.title}</Title>
                  <DateString type="secondary">{post.date}</DateString>
                </ListTitleBlock>
                <Description>{post.description}</Description>
                <Tags>
                  {post.tags.map((tag, idx) => (
                    <li key={idx}>#{tag}</li>
                  ))}
                </Tags>
              </ListContainer>
            </a>
          </Link>
        ))}
      </BlogLists>
    </>
  );
};

export default ViewList;
