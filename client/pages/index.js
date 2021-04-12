import styled from "@emotion/styled";
import { Button } from "antd";

import Header from "@/components/Header";
import Button2 from "@/components/Button";

const BlueBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
`;

export default function Home() {
  return (
    <div style={{ marginTop: 100 }}>
      <Header />
      <Button type="primary">antd Box</Button>
      <Button2 />
      <BlueBox />
    </div>
  );
}
