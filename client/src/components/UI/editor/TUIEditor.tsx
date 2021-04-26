import dynamic from 'next/dynamic';
import * as React from 'react';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { TuiEditorWithForwardedProps } from './TUIEditorWrapper';
import Head from 'next/head';
import { ImageUploader } from '@common/types';

// editor plugin
import 'highlight.js/styles/github.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js';

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import('./TUIEditorWrapper'), {
  ssr: false,
});

const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorPropsWithHandlers>(
  (props, ref) => <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />,
);

interface Props extends EditorProps {
  onChange(value: string): void;
  imageUploader: ImageUploader;
  valueType?: 'markdown' | 'html';
}

const WysiwygEditor: React.FC<Props> = (props) => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut,
    imageUploader,
  } = props;

  const editorRef = React.useRef<EditorType>();

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || 'markdown';

    props.onChange(valueType === 'markdown' ? instance.getMarkdown() : instance.getHtml());
  }, [props, editorRef]);

  return (
    <>
      <Head>
        <title>글쓰기 :: seunggyu</title>

        <link
          rel="stylesheet"
          href="https://uicdn.toast.com/editor/latest/toastui-editor-viewer.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/github.min.css"
        />
      </Head>
      <div>
        <EditorWithForwardedRef
          {...props}
          ref={editorRef}
          initialValue={initialValue || '좋은 블로그 내용을 작성하자!! 🔥🔥👋'}
          previewStyle={previewStyle || 'vertical'}
          height={height || '600px'}
          initialEditType={initialEditType || 'markdown'}
          useCommandShortcut={useCommandShortcut || true}
          usageStatistics={false}
          onChange={handleChange}
          hooks={{
            addImageBlobHook: async (blob, callback) => {
              const uploaded = await imageUploader.upload(blob);
              callback(uploaded.url, uploaded.original_filename);
              return false;
            },
          }}
          plugins={[[codeSyntaxHighlight, { hljs }] as any]}
        />
      </div>
    </>
  );
};

export default WysiwygEditor;
