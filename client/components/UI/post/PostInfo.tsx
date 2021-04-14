import { FC } from "react";
import styled from "@emotion/styled";
import { theme } from "@theme/index";
import { Typography } from "antd";
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

const Info: FC = () => {
  return (
    <PostInfo>
      <Title>자료 구조 - 스택</Title>
      <DateString type="secondary">2021.04.07</DateString>
      <Tags>
        <Tag>#자료구조</Tag>
        <Tag>#스택</Tag>
      </Tags>
    </PostInfo>
  );
};

export default Info;
