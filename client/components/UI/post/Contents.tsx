import { FC } from "react";
import styled from "@emotion/styled";

const TemporaryBox = styled.div`
  margin-top: 75px;
`;

const Contents: FC = () => {
  return (
    <TemporaryBox>
      <h1> Contents </h1>
    </TemporaryBox>
  );
};

export default Contents;
