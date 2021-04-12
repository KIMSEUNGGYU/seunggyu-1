import styled from "@emotion/styled";
import { MenuOutlined, BlockOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";

import { theme } from "@theme/index";

const ViewModeBlock = styled.ul`
  /* width: 100%; */
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 36px;
`;

const MenuItem = styled.li<{ choice?: boolean }>`
  margin-left: 25px;
  cursor: pointer;
  ${(props) =>
    props.choice &&
    css`
      font-weight: bold;
      color: ${theme.MAIN_COLOR};
    `}
`;

function ViewMode() {
  return (
    <ViewModeBlock>
      <MenuItem choice>
        <MenuOutlined />
      </MenuItem>
      <MenuItem>
        <BlockOutlined />
      </MenuItem>
    </ViewModeBlock>
  );
}

export default ViewMode;
