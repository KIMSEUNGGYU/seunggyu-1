import { css, Global } from '@emotion/react';

import { ThemeType, lightTheme, darkTheme } from './theme';
import { useTheme } from '@context/themeProvider';

interface GlobalStyleProps {
  theme: ThemeType;
}

// const GlobalStyle = ({ theme }: GlobalStyleProps) => {
const GlobalStyle = () => {
  const [mode, _] = useTheme();
  const theme = mode === 'light' ? lightTheme : darkTheme;
  // console.log('mode', mode, theme);

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          overflow-y: scroll;
          background: ${theme.backgroundColor};
        }

        ul {
          margin: 0;
          padding-left: 0;
        }
        li {
          list-style: none;
        }
        h1 {
          margin: 0;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};

export default GlobalStyle;

// const globalStyle = css`
//   * {
//     box-sizing: border-box;
//   }
//   body {
//     /* background-color: #f8f9fa; */
//     background: ${(props) => props.theme.bgColor};
//     margin: 0;
//     overflow-y: scroll;
//   }

//   ul {
//     margin: 0;
//     padding-left: 0;
//   }
//   li {
//     list-style: none;
//   }
//   h1 {
//     margin: 0;
//   }
//   a {
//     text-decoration: none;
//     color: inherit;
//   }
// `;
