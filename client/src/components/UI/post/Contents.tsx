import styled from '@emotion/styled';
import { PostData } from '@common/types';
// import TUIViewer from 'src/components/UI/editor/TUIViewer';
import ReactMarkdown from 'react-markdown';
import renderers from './renderers';

interface Props {
  post: PostData;
}

function Contents({ post }: Props) {
  return (
    <TemporaryBox>
      {/* <TUIViewer contents={post.contents} /> */}
      <ReactMarkdown renderers={renderers} children={post.contents} />
    </TemporaryBox>
  );
}

const TemporaryBox = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`;

export default Contents;
