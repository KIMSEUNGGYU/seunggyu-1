import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { theme } from "@theme/index";
import { tags } from "@data/data";

const TagsContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 60px;
`;

const TagTitle = styled.h1`
  margin: 0 auto;
`;
const TagList = styled.ul`
  margin-top: 1em;
`;
const Tag = styled.li<{ choice?: boolean }>`
  font-size: 25px;
  cursor: pointer;
  ${(props) =>
    props.choice &&
    css`
      color: ${theme.MAIN_COLOR};
      font-weight: bolder;
    `}
`;

function Tags() {
  return (
    <TagsContainer>
      <TagTitle># 태그</TagTitle>
      <TagList>
        {tags.map((tag) => (
          <Tag>{tag.tag}</Tag>
        ))}
        {/* <Tag choice>전체 보기</Tag>
        <Tag>자료 구조</Tag>
        <Tag>리액트</Tag>
        <Tag>브라우저</Tag> */}
      </TagList>
    </TagsContainer>
  );
}

export default Tags;
