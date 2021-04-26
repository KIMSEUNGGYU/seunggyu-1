import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { css, Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { theme } from '../theme/index';
import Header from '@ui/header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.BACKGROUND_COLOR};
    margin: 0;
    overflow-y: scroll;
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
`;

export default MyApp;
