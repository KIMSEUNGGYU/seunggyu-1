import TUIEditor from "@ui/editor/TUIEditor";
import ImageUploaderImpl from "@services/image_uploader";
const imageUploader = new ImageUploaderImpl();

export default function WritePage() {
  return (
    <div>
      <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>

      <TUIEditor
        imageUploader={imageUploader}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}
