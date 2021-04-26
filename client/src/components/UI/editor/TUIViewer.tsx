import dynamic from 'next/dynamic';
import * as React from 'react';
import { Viewer as ViewerType, ViewerProps } from '@toast-ui/react-editor';
import { TuiViewerWithForwardedProps } from './TUIViewerWrapper';

// editor plugin
import 'highlight.js/styles/github.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';

interface ViewerPropsWithHandlers extends ViewerProps {
  onChange?(value: string): void;
}

const Viewer = dynamic<TuiViewerWithForwardedProps>(() => import('./TUIViewerWrapper'), {
  ssr: false,
});

const ViewerWithForwardedRef = React.forwardRef<ViewerType | undefined, ViewerPropsWithHandlers>(
  (props, ref) => <Viewer {...props} forwardedRef={ref as React.MutableRefObject<ViewerType>} />,
);

interface Props extends ViewerProps {
  contents: string;
}

const WysiwygEditor: React.FC<Props> = (props) => {
  const { contents } = props;

  return (
    <ViewerWithForwardedRef
      {...props}
      initialValue={contents}
      plugins={[[codeSyntaxHighlight, { hljs }] as any]}
    />
  );
};

export default WysiwygEditor;
