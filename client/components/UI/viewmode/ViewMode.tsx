import { useState } from "react";
import styled from "@emotion/styled";
import { MenuOutlined, BlockOutlined } from "@ant-design/icons";

import { theme } from "@theme/index";

type ViewModeType = "list" | "block";
const initMode = {
  list: false,
  block: false,
};

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

const MenuItem = styled.li`
  margin-left: 25px;
  cursor: pointer;

  &.choice {
    font-weight: bold;
    color: ${theme.MAIN_COLOR};
  }
`;

function ViewMode() {
  const [mode, setMode] = useState(initMode);
  const clickHandler = (view: ViewModeType) =>
    setMode({ ...initMode, [view]: true });

  return (
    <ViewModeBlock>
      <MenuItem
        className={mode.list ? "choice" : ""}
        onClick={() => clickHandler("list")}
      >
        <MenuOutlined />
      </MenuItem>
      <MenuItem
        className={mode.block ? "choice" : ""}
        onClick={() => clickHandler("block")}
      >
        <BlockOutlined />
      </MenuItem>
    </ViewModeBlock>
  );
}

export default ViewMode;
