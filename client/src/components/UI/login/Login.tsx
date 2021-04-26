import React from 'react';
import styled from '@emotion/styled';
import { useRef } from 'react';

import { theme } from '@theme/index';
import { Input, Button } from 'antd';

import { Post } from '@util/util';
import { useRouter } from 'next/router';

import { isLoginState } from '@state/index';
import { useSetRecoilState } from 'recoil';

function Login() {
  const router = useRouter();
  const setIsLogin = useSetRecoilState(isLoginState);
  const idRef = useRef<any>();
  const passwordRf = useRef<any>();

  const login = async () => {
    const id = idRef.current.state.value;
    const password = passwordRf.current.state.value;

    if (!(id && password)) {
      alert('모두 입력 바랍니다.');
      return;
    }

    const response = await Post('/api/login', {
      id,
      password,
    });

    if (response?.status === 200) {
      alert('로그인 성공');
      setIsLogin(true);
      localStorage.setItem('seunggyu', 'root');

      router.push('/');
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <LoginContainer>
      <InputStyle ref={idRef} size="large" placeholder="아이디" />
      <InputStyle ref={passwordRf} size="large" placeholder="비밀번호" type="password" />
      <SingInButton type="primary" onClick={login}>
        로그인
      </SingInButton>
    </LoginContainer>
  );
}

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

export default Login;
