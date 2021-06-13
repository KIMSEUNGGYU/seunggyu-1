import styled from '@emotion/styled';
import { PostData } from '@common/types';
// import TUIViewer from 'src/components/UI/editor/TUIViewer';
import ReactMarkdown from 'react-markdown';
import renderers from './renderers';
import gfm from 'remark-gfm';
import { css, Global } from '@emotion/react';

interface Props {
  post: PostData;
}

function Contents({ post }: Props) {
  return (
    <TemporaryBox>
      {/* <TUIViewer contents={post.contents} /> */}
      <ReactMarkdown children={post.contents} renderers={renderers} />
    </TemporaryBox>
  );
}

const TemporaryBox = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`;

export default Contents;
