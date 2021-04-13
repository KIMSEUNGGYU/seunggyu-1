import styled from "@emotion/styled";
import { MenuOutlined, BlockOutlined } from "@ant-design/icons";

import { theme } from "@theme/index";

type ViewModeType = "list" | "block";
type ViewModeProps = {
  mode: boolean;
  changeViewMode: (mode: ViewModeType) => void;
};
const initMode = {
  list: false,
  block: false,
};

const ViewModeBlock = styled.ul`
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

function ViewMode({ changeViewMode, mode }: ViewModeProps) {
  return (
    <ViewModeBlock>
      <MenuItem
        className={mode === true ? "choice" : ""}
        onClick={() => changeViewMode("list")}
      >
        <MenuOutlined />
      </MenuItem>
      <MenuItem
        className={mode === false ? "choice" : ""}
        onClick={() => changeViewMode("block")}
      >
        <BlockOutlined />
      </MenuItem>
    </ViewModeBlock>
  );
}

export default ViewMode;
