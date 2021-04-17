import dynamic from "next/dynamic";
import * as React from "react";
import { Viewer as ViewerType, ViewerProps } from "@toast-ui/react-editor";
import { TuiViewerWithForwardedProps } from "./TUIViewerWrapper";
import Head from "next/head";
import { ImageUploader } from "@common/types";

interface ViewerPropsWithHandlers extends ViewerProps {
  onChange?(value: string): void;
}

const Viewer = dynamic<TuiViewerWithForwardedProps>(
  () => import("./TUIViewerWrapper"),
  { ssr: false }
);

const ViewerWithForwardedRef = React.forwardRef<
  ViewerType | undefined,
  ViewerPropsWithHandlers
>((props, ref) => (
  <Viewer {...props} forwardedRef={ref as React.MutableRefObject<ViewerType>} />
));

interface Props extends ViewerProps {
  // onChange(value: string): void;
  // imageUploader: ImageUploader;
  // valueType?: "markdown" | "html";
}

const WysiwygEditor: React.FC<Props> = (props) => {
  const { initialValue } = props;

  const editorRef = React.useRef<ViewerType>();

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
        <ViewerWithForwardedRef {...props} initialValue="# hello" />
      </div>
    </>
  );
};

export default WysiwygEditor;
