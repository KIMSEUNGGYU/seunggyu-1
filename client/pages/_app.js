import { css, Global } from "@emotion/react";

import { theme } from "../theme/index";

const globalStyle = css`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.BACKGROUND_COLOR};
    margin: 0;
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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
