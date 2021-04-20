import { FC } from "react";
import styled from "@emotion/styled";
import { MenuOutlined, BlockOutlined } from "@ant-design/icons";

import { theme } from "@theme/index";
import { ViewModeData } from "@common/types";

type Props = {
  mode: boolean;
  changeViewMode: (mode: ViewModeData) => void;
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

const ViewMode: FC<Props> = ({ changeViewMode, mode }) => {
  return (
    <ViewModeBlock>
      <MenuItem className={mode === true ? "choice" : ""} onClick={() => changeViewMode("list")}>
        <MenuOutlined />
      </MenuItem>
      <MenuItem className={mode === false ? "choice" : ""} onClick={() => changeViewMode("block")}>
        <BlockOutlined />
      </MenuItem>
    </ViewModeBlock>
  );
};

export default ViewMode;
