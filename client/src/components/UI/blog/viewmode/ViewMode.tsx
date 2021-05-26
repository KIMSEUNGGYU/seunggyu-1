import styled from '@emotion/styled';
import { MenuOutlined, BlockOutlined } from '@ant-design/icons';

import { BP } from '@theme/index';
import { ViewModeData } from '@common/types';

type Props = {
  mode: ViewModeData;
  changeViewMode: (mode: ViewModeData) => void;
};

function ViewMode({ changeViewMode, mode }: Props) {
  const handelChangeMode = (viewMode: ViewModeData) => () => {
    changeViewMode(viewMode);
  };

  return (
    <ViewModeBlock>
      <MenuItem className={mode === 'list' ? 'active' : ''} onClick={handelChangeMode('list')}>
        <MenuOutlined />
      </MenuItem>
      <MenuItem className={mode === 'block' ? 'active' : ''} onClick={handelChangeMode('block')}>
        <BlockOutlined />
      </MenuItem>
    </ViewModeBlock>
  );
}

const ViewModeBlock = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;

  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-left: 25px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.hoverColor};
  }
  &.active {
    color: ${({ theme }) => theme.activeColor};
    font-weight: bold;
  }
`;
export default ViewMode;
