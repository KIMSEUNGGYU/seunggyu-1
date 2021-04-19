import { FC } from "react";
import styled from "@emotion/styled";
import { theme } from "@theme/index";
import { PostData } from "@common/types";
import { Typography, Button } from "antd";
const { Text } = Typography;

const PostInfo = styled.div`
  width: 100%;

  & > div {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  Button + Button {
    margin-left: 10px;
    align-self: center;
  }
`;

const Title = styled(Text)`
  display: block;
  font-size: 2em;
  font-weight: bold;
`;

const DateString = styled(Text)`
  color: ${theme.GREY_TEXT_COLOR};
  font-weight: bold;
  align-self: center;
`;

const Tags = styled.ul`
  display: flex;
`;

const Tag = styled.li`
  color: ${theme.MAIN_COLOR};
  font-weight: bold;
  margin-right: 6px;
  font-weight: bold;
`;

interface Props {
  post: PostData;
  deletePost: (id: number) => void;
}

const Info: FC = ({ post, deletePost }: Props) => {
  return (
    <PostInfo>
      <Title>{post.title}</Title>
      <div>
        <DateString type="secondary">{post.date}</DateString>
        {true && (
          <div>
            <Button size="small"> 수정 </Button>
            <Button size="small" onClick={() => deletePost(post.id)}>
              삭제
            </Button>
          </div>
        )}
      </div>
      <Tags>
        {post.tags.map((tag, idx) => (
          <Tag key={idx}>#{tag}</Tag>
        ))}
      </Tags>
    </PostInfo>
  );
};

export default Info;
