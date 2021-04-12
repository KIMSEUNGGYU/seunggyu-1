import { css, Global } from "@emotion/react";

import { theme } from "../theme/index";

const globalStyle = css`
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
  textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
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
