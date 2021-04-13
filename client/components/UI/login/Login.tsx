import styled from "@emotion/styled";

import { theme } from "@theme/index";
import { Input, Button } from "antd";

const LoginContainer = styled.div`
  max-width: 800px;
  background-color: white;
  margin: 0 auto;
  margin-top: 150px;
  height: 300px;
  border: 1px solid ${theme.BORDER_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
  width: 50%;
`;

const SingInButton = styled(Button)`
  width: 50%;
  height: 40px;
  font-size: 1.4em;
`;

function Login() {
  return (
    <LoginContainer>
      <InputStyle size="large" placeholder="아이디" />
      <InputStyle size="large" placeholder="비밀번호" type="password" />
      <SingInButton type="primary">로그인</SingInButton>
    </LoginContainer>
  );
}

export default Login;
