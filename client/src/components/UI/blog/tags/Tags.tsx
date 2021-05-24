import styled from '@emotion/styled';
import Text from 'antd/lib/typography/Text';

import { BP, theme } from '@theme/index';
import { TagData } from '@common/types';

type Props = {
  tagList: TagData;
  tagName: string | null;
  changeTag: (tagName: string | null) => void;
};

function Tags({ tagList, tagName, changeTag }: Props) {
  const viewAllTag = (
    <Tag className={tagName === null ? 'active' : ''} onClick={() => changeTag(null)}>
      전체보기
    </Tag>
  );

  const TagList = tagList.map((tag, idx) => {
    return (
      <Tag key={idx} className={tagName == tag ? 'active' : ''} onClick={() => changeTag(tag)}>
        {tag}
      </Tag>
    );
  });

  return (
    <TagsContainer>
      <Title># 태그</Title>
      <TagListWrapper>
        {viewAllTag}
        {TagList}
      </TagListWrapper>
    </TagsContainer>
  );
}

const TagsContainer = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 60px;
  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

const Title = styled(Text)`
  font-size: 2em;
  font-weight: bold;
  margin: 0 auto;
`;

const TagListWrapper = styled.ul`
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
