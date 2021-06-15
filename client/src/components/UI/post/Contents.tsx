import styled from '@emotion/styled';
import { PostData } from '@common/types';

import TUIViewer from 'src/components/UI/editor/TUIViewer';
import ReactMarkdown from 'react-markdown';
import renderers from './renderers';

interface Props {
  post: PostData;
}

function Contents({ post }: Props) {
  return (
    <TemporaryBox>
      {/* <TUIViewer contents={post.contents} /> */}
      <ReactMarkDownWrapper children={post.contents} renderers={renderers} />
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

  & img {
    display: block;
    margin: 0 auto;
    padding: 1em 0;
    max-width: 100%;
  }
`;

export default Contents;
