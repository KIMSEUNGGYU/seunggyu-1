import React, { useCallback, useEffect } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';

import { themeModeState } from '@state/index';

function ThemeToggle() {
  const [mode, setMode] = useRecoilState(themeModeState);

  useEffect(() => {
    const LocalTheme = localStorage.getItem('theme') || 'light';
    setMode(LocalTheme);
  }, []);

  const toggle = useCallback(() => {
    if (mode === 'dark') {
      localStorage.setItem('theme', 'light');
      setMode('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setMode('dark');
    }
  }, [mode]);

  return (
    <ToggleWrapper mode={mode} onClick={toggle}>
      {mode === 'dark' ? '🌚' : '🌝'}
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.button<{ mode: any }>`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) => theme.border};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default React.memo(ThemeToggle);
