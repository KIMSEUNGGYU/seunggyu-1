import { FC } from "react";
import styled from "@emotion/styled";
import { theme } from "@theme/index";
import { Typography } from "antd";
import { PostData } from "@common/types";
const { Text } = Typography;

const PostInfo = styled.div`
  width: 100%;
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

const Tags = styled.ul`
  margin-top: 8px;
  display: flex;
`;

const Tag = styled.li`
  color: ${theme.MAIN_COLOR};
  font-weight: bold;
  margin-right: 6px;
  font-weight: bold;
  font-size: 16px;
`;

interface Props {
  post: PostData;
}

const Info: FC = ({ post }: Props) => {
  return (
    <PostInfo>
      <Title>{post.title}</Title>
      <DateString type="secondary">{post.date}</DateString>
      <Tags>
        {post.tags.map((tag, idx) => (
          <Tag key={idx}>#{tag}</Tag>
        ))}
      </Tags>
    </PostInfo>
  );
};

export default Info;
