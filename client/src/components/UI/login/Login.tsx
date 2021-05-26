import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { Input } from 'antd';

import { Post } from '@util/util';

import { isLoginState } from '@state/index';
import { env } from '@constants/env';

const BASE_URL = env.BASE_URL;

function Login() {
  const router = useRouter();
  const setIsLogin = useSetRecoilState(isLoginState);

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setId(target.value);
  };

  const handleChangePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
  };

  const login = async () => {
    if (!(id && password)) {
      alert('모두 입력 바랍니다.');
      return;
    }

    try {
      const url = `${BASE_URL}/auth/login`;
      const response = await Post(url, {
        userId: id,
        password,
      });

      if (response?.status !== 200) {
        setId('');
        setPassword('');
        alert('로그인 실패');
        return;
      }

      alert('로그인 성공');
      setIsLogin(true);
      localStorage.setItem('seunggyu', 'root');
      router.push('/');
    } catch (error) {
      console.error(`Login Error: ${error}`);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login();
  };

  return (
    <LoginContainer onSubmit={handleSubmit}>
      <InputStyle size="large" placeholder="아이디" onChange={handleChangeId} value={id} />
      <InputStyle
        size="large"
        placeholder="비밀번호"
        type="password"
        onChange={handleChangePassword}
        value={password}
      />
      <SignInButton type={'submit'}>로그인</SignInButton>
    </LoginContainer>
  );
}

const LoginContainer = styled.form`
  max-width: 800px;
  margin: 0 auto;
  margin-top: 150px;
  height: 300px;
  background: ${({ theme }) => theme.seriesListBoxColor};
  border: ${({ theme }) => theme.border};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputStyle = styled(Input)`
  margin-bottom: 20px;
  width: 50%;
  padding: 0.5em;
`;

const SignInButton = styled.button`
  width: 50%;
  height: 40px;
  font-size: 1.4em;
  background: ${({ theme }) => theme.mainColor};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.hoverColor};
  }
`;

export default Login;
