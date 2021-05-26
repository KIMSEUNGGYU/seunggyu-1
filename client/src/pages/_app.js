import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import Header from '@header/Header';
import ThemeToggle from '@theme/ThemeToggle';
import { theme } from '@theme/theme';
import ThemeProvider from '@context/themeProvider.js';
import GlobalStyle from '@theme/globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
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
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
        <ThemeToggle />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
