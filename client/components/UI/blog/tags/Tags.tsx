import { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "antd";

import { theme } from "@theme/index";
const { Text } = Typography;
import { TagData } from "@common/types";

type Props = {
  tags: TagData[];
};

const TagsContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 60px;
`;

const Title = styled(Text)`
  font-size: 2em;
  font-weight: bold;
  margin: 0 auto;
`;

const TagList = styled.ul`
  margin-top: 1em;
`;

const Tag = styled.li`
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: ${theme.MAIN_COLOR};
    font-weight: bold;
  }
`;

const Tags: FC<Props> = ({ tags }) => {
  console.log("tags", tags);
  return (
    <TagsContainer>
      <Title># 태그</Title>
      <TagList>
        {tags.map((tag) => (
          <Tag key={tag.id}>{tag.tag}</Tag>
        ))}
      </TagList>
    </TagsContainer>
  );
};

export default Tags;
