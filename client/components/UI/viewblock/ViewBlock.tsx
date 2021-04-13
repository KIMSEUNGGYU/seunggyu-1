import styled from "@emotion/styled";
import { theme } from "@theme/index";

type Post = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
};
type ViewBlockProps = {
  posts: Post[];
};

const BlogBlock = styled.div`
  max-width: 80%;
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
const ListTitle = styled.h1`
  font-size: 30px;
`;
const DateString = styled.span`
  color: ${theme.GREY_TEXT_COLOR};
  font-weight: bold;
`;
const Description = styled.p`
  margin-top: 24px;
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
`;
const Tags = styled.ul`
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 10px;
`;
const Tag = styled.li`
  color: ${theme.MAIN_COLOR};
  font-weight: bold;
  margin-right: 6px;
`;

function ViewBlock({ posts }: ViewBlockProps) {
  return (
    <BlogBlock>
      {posts.map((post) => (
        <BlockContainer>
          <ListTitle>{post.title}</ListTitle>
          <DateString>{post.date}</DateString>
          <Description>{post.description}</Description>
          <Tags>
            {post.tags.map((tag, idx) => (
              <Tag key={idx}>#{tag}</Tag>
            ))}
          </Tags>
        </BlockContainer>
      ))}
    </BlogBlock>
  );
}

export default ViewBlock;
