import Head from 'next/head';
import { css, Global } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import Header from '@header/Header';
import ThemeToggle from '@theme/ThemeToggle';
import { theme } from '@theme/theme';
import ThemeProvider from '@context/themeProvider.js';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Head>
        <title>SEUNGGYU</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="개발자 김승규의 블로그 입니다. 좋은 컨텐츠를 생산하겠습니다."
        />
        <meta name="og:title" content="SEUNGGYU" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/du4w00gvm/image/upload/v1619410321/main_image.png"
        />
        <meta
          name="og:description"
          content="개발자 김승규의 블로그 입니다. 좋은 컨텐츠를 생산하겠습니다."
        />
        <meta property="og:type" content="website" />
        {/* Mixed Content Error fix */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <ThemeToggle />
      </RecoilRoot>
    </ThemeProvider>
  );
}

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #f8f9fa;
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
