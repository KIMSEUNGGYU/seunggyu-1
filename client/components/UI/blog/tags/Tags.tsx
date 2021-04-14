import { FC } from "react";
import styled from "@emotion/styled";
import { Typography } from "antd";

import { theme } from "@theme/index";
const { Text } = Typography;
import { TagData } from "@common/types";
import { css } from "@emotion/react";

type Props = {
  tags: TagData[];
  tagId: string | null;
  changeTag: (tagId: string | null) => void;
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

const Tag = styled.li<{ isFocus?: boolean }>`
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: ${theme.MAIN_COLOR};
    /* font-weight: bold; */
  }

  ${(props) =>
    props.isFocus &&
    css`
      color: ${theme.MAIN_COLOR};
      font-weight: bold;
    `}
`;

const Tags: FC<Props> = ({ tags, tagId, changeTag }) => {
  return (
    <TagsContainer>
      <Title># 태그</Title>
      <TagList>
        <Tag
          isFocus={tagId === null ? true : false}
          key={0}
          onClick={() => changeTag(null)}
        >
          전체보기
        </Tag>
        {tags.map((tag) => {
          return (
            <Tag
              key={tag.id}
              isFocus={tagId?.toString() === tag.id}
              onClick={() => changeTag(tag.id)}
            >
              {tag.tag}
            </Tag>
          );
        })}
      </TagList>
    </TagsContainer>
  );
};

export default Tags;
