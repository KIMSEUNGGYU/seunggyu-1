import { RecoilRoot } from 'recoil';

import Header from '@header/Header';
import HeadWrapper from '@components/Head';

import ThemeToggle from '@theme/ThemeToggle';
import { theme } from '@theme/theme';
import GlobalStyle from '@theme/globalStyle';
import ThemeProvider from '@context/themeProvider.js';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadWrapper />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RecoilRoot>
          <Header />
          <Component {...pageProps} />
          <ThemeToggle />
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
