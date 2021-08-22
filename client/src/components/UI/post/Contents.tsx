import styled from '@emotion/styled';
import { PostData } from '@common/types';

import TUIViewer from 'src/components/UI/editor/TUIViewer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import renderers from './renderers';

interface Props {
  post: PostData;
}

function Contents({ post }: Props) {
  return (
    <TemporaryBox>
      {/* <TUIViewer contents={post.contents} /> */}
      <ReactMarkDownWrapper children={post?.contents} renderers={renderers} plugins={[remarkGfm]} />
    </TemporaryBox>
  );
}

const TemporaryBox = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`;

const ReactMarkDownWrapper = styled(ReactMarkdown)`
  color: ${({ theme }) => theme.postTextColor};
  width: 100%;
  font-size: 16px;

  h1 {
    margin-top: 32px;
    margin-bottom: 4px;
    font-size: 30px;
    font-weight: bold;
  }
  h2 {
    margin-top: 22.4px;
    margin-bottom: 1px;
    font-size: 24px;
    font-weight: bold;
  }
  h3 {
    margin-top: 16px;
    margin-bottom: 1px;
    font-size: 20px;
    font-weight: bold;
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

  & img {
    display: block;
    margin: 0 auto;
    padding: 1em 0;
    max-width: 100%;
  }
  & img:hover {
    cursor: pointer;
  }

  white-space: pre-wrap; // 줄 바꿈

  a {
    color: ${({ theme }) => theme.A_LINK};
    text-decoration: underline;
  }
  a:hover {
  }

  ol {
    margin: 0;
    padding-left: 0;
  }

  ol > li {
    list-style-type: decimal;
  }
  /* ul {
    margin: 0;
    padding-left: 0;
  } */
`;

export default Contents;
