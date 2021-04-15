import Link from "next/link";
import TUIEditor from "@ui/editor/TUIEditor";

export default function Home() {
  return (
    <div>
      <h1>좋은 블로그 내용을 작성하자!! 🔥🔥👋</h1>

      <TUIEditor onChange={(value) => console.log(value)} />
      {/* <TUIEditor /> */}
    </div>
  );
}
