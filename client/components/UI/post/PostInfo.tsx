import styled from "@emotion/styled";
import { theme } from "@theme/index";

const PostInfo = styled.div`
  width: 100%;
`;
const Title = styled.h1`
  font-size: 36px;
`;
const DateString = styled.span`
  display: inline-block;
  margin-top: 21px;
  color: ${theme.GREY_TEXT_COLOR};
  font-weight: bold;
  font-size: 14px;
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

function Info() {
  return (
    <PostInfo>
      <Title>자료 구조 - 스택</Title>
      <DateString>2021.04.07</DateString>
      <Tags>
        <Tag>#우주</Tag>
        <Tag>#지구</Tag>
      </Tags>
    </PostInfo>
  );
}

export default Info;
