import { css } from '@emotion/react';
import { lightTheme, darkTheme } from '@theme/theme';

const PostViewStyle = (mode: any) => {
  const theme = mode === 'light' ? lightTheme : darkTheme;

  return css`
    body {
      margin: 0;
      overflow-y: scroll;
      background: ${theme.postBackgroundColor};
      color: ${theme.postTextColor};
    }
    h1 {
      margin-top: 32px;
      margin-bottom: 4px;
      font-size: 30px;
    }
    h2 {
      margin-top: 22.4px;
      margin-bottom: 1px;
      font-size: 24x;
    }
    h3 {
      margin-top: 16px;
      margin-bottom: 1px;
      font-size: 20px;
    }
    li {
      list-style: disc;
      margin-left: 1.7rem;
      padding: 3px 2px;
    }
    p {
      margin: 0;
      padding: 3px 2px;
    }
  `;
};

export default PostViewStyle;
