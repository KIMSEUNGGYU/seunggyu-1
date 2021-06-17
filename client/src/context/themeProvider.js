import { createContext } from 'react';
import { ThemeProvider as StyledProvider } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import { lightTheme, darkTheme } from '@theme/theme';
import { themeModeState } from '@state/index';

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const mode = useRecoilValue(themeModeState);
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ mode }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
