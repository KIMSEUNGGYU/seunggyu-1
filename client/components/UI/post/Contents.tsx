import styled from '@emotion/styled';
import { PostData } from '@common/types';
import TUIViewer from '@ui/editor/TUIViewer';

interface Props {
  post: PostData;
}

function Contents({ post }: Props) {
  return (
    <TemporaryBox>
      <TUIViewer contents={post.contents} />
    </TemporaryBox>
  );
}

const TemporaryBox = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
`;
export default Contents;
