import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { css, Global } from '@emotion/react';

import { theme } from '../theme/index';
import Header from '@ui/header/Header';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [bLogin, setbLogin] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem('seunggyu');
    if (isLogin) {
      setbLogin(true);
    } else {
      router.push('/');
    }
    console.log('isLogin', isLogin);
  }, [bLogin]);

  return (
    <>
      <Header bLogin={bLogin} setbLogin={setbLogin} />
      <Global styles={globalStyle} />
      <Component {...pageProps} bLogin={bLogin} setbLogin={setbLogin} />
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
