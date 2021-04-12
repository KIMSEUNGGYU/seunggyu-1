import { css, Global } from "@emotion/react";

import { theme } from "../theme/index";

const globalStyle = css`
  body {
    background-color: ${theme.BACKGROUND_COLOR};
    margin: 0;
  }

  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
