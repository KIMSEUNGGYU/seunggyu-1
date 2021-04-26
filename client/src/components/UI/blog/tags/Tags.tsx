import styled from '@emotion/styled';
import { Typography } from 'antd';

import { theme } from '@theme/index';
import { TagData } from '@common/types';
const { Text } = Typography;

type Props = {
  tags: TagData[];
  tagId: string | null;
  changeTag: (tagId: string | null) => void;
};

function Tags({ tags, tagId, changeTag }: Props) {
  const viewAllTag = (
    <Tag className={tagId === null ? 'active' : ''} onClick={() => changeTag(null)}>
      전체보기
    </Tag>
  );

  const tagList = tags.map((tag) => {
    return (
      <Tag
        key={tag.id}
        className={tagId?.toString() == tag.id ? 'active' : ''}
        onClick={() => changeTag(tag.id)}
      >
        {tag.name}
      </Tag>
    );
  });

  return (
    <TagsContainer>
      <Title># 태그</Title>
      <TagList>
        {viewAllTag}
        {tagList}
      </TagList>
    </TagsContainer>
  );
}

const TagsContainer = styled.aside`
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

const Tag = styled.li<{ active?: boolean }>`
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    color: ${theme.MAIN_COLOR};
  }
  &.active {
    color: ${theme.MAIN_COLOR};
    font-weight: bold;
  }
`;

export default Tags;
