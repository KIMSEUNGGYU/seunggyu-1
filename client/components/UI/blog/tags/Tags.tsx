import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { theme } from "@theme/index";

type TagsProps = {
  tags: string[];
};

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
const TagItem = styled.li<{ choice?: boolean }>`
  font-size: 25px;
  cursor: pointer;
  ${(props) =>
    props.choice &&
    css`
      color: ${theme.MAIN_COLOR};
      font-weight: bolder;
    `}
`;

function Tags({ tags }: TagsProps) {
  const [toggle, setToggle] = useState("전체 보기");

  const handleClick = (tag: string) => setToggle(tag);

  return (
    <TagsContainer>
      <TagTitle># 태그</TagTitle>
      <TagList>
        {tags.map((tag, idx) => (
          <TagItem key={idx} onClick={() => handleClick(tag)}>
            {tag}
          </TagItem>
        ))}
      </TagList>
    </TagsContainer>
  );
}

export default Tags;
