import dynamic from "next/dynamic";
import * as React from "react";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { TuiEditorWithForwardedProps } from "./TUIEditorWrapper";
import { Button } from "antd";
import styled from "@emotion/styled";
import Head from "next/head";
import { theme } from "@theme/index";

// editor plugin
import "highlight.js/styles/github.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import hljs from "highlight.js";

const EditorMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 10px;
  background-color: white;
  border: 1px solid ${theme.BORDER_COLOR};
`;

const PrevButton = styled.button`
  border: none;
  outline: none;
  background-color: white;
  color: grey;
  font-weight: bold;
  margin-left: 30px;
  font-size: 1.5em;
  cursor: pointer;

  &:hover {
    background-color: ${theme.BACKGROUND_COLOR};
  }
`;

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
  () => import("./TUIEditorWrapper"),
  { ssr: false }
);

const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

interface Props extends EditorProps {
  onChange(value: string): void;

  valueType?: "markdown" | "html";
}

const WysiwygEditor: React.FC<Props> = (props) => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut,
  } = props;

  const editorRef = React.useRef<EditorType>();

  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";

    props.onChange(
      valueType === "markdown" ? instance.getMarkdown() : instance.getHtml()
    );
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
          initialValue={initialValue || "hello react editor world!"}
          previewStyle={previewStyle || "vertical"}
          height={height || "800px"}
          initialEditType={initialEditType || "markdown"}
          useCommandShortcut={useCommandShortcut || true}
          usageStatistics={false}
          onChange={handleChange}
          hooks={{
            addImageBlobHook: (blob, callback) => {
              console.log("test", blob);
              // const uploadedImageURL = uploadImage(blob);
              // callback(blob, "alt text");
              return false;
            },
          }}
          plugins={[[codeSyntaxHighlight, { hljs }]]}
        />

        <EditorMenu>
          <PrevButton> {"← 나가기"}</PrevButton>
          <Button type="primary">작성하기</Button>
        </EditorMenu>
      </div>
    </>
  );
};

export default WysiwygEditor;
