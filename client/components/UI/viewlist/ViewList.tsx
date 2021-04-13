import styled from "@emotion/styled";
import { theme } from "@theme/index";

type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

type PorpsType = {
  posts: Post[];
};

const BlogLists = styled.ul`
  width: 80%;
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
const ListTitle = styled.h1``;

const DateString = styled.span`
  color: ${theme.GREY_TEXT_COLOR};
  margin-left: 1em;
  font-weight: bold;
`;

const Description = styled.p`
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
`;

const Tag = styled.li`
  color: ${theme.MAIN_COLOR};
  font-weight: bold;
  margin-right: 6px;
`;

function ViewList({ posts }: PorpsType) {
  return (
    <>
      <BlogLists>
        {posts.map((post, idx) => (
          <ListContainer key={idx}>
            <ListTitleBlock>
              <ListTitle>{post.title}</ListTitle>
              <DateString>{post.date}</DateString>
            </ListTitleBlock>
            <Description>{post.description}</Description>
            <Tags>
              {post.tags.map((tag, idx) => (
                <Tag key={idx}>#{tag}</Tag>
              ))}
            </Tags>
          </ListContainer>
        ))}
      </BlogLists>
    </>
  );
}

export default ViewList;
