import styled from '@emotion/styled';
import { MenuOutlined, BlockOutlined } from '@ant-design/icons';

import { theme, BP } from '@theme/index';
import { ViewModeData } from '@common/types';

type Props = {
  mode: ViewModeData;
  changeViewMode: (mode: ViewModeData) => void;
};

function ViewMode({ changeViewMode, mode }: Props) {
  return (
    <ViewModeBlock>
      <MenuItem className={mode === 'list' ? 'choice' : ''} onClick={() => changeViewMode('list')}>
        <MenuOutlined />
      </MenuItem>
      <MenuItem
        className={mode === 'block' ? 'choice' : ''}
        onClick={() => changeViewMode('block')}
      >
        <BlockOutlined />
      </MenuItem>
    </ViewModeBlock>
  );
}

const ViewModeBlock = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  margin-top: 2rem;
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

  &.choice {
    font-weight: bold;
    color: ${theme.MAIN_COLOR};
  }
`;
export default ViewMode;
