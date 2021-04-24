import WritePage from '@pages/Write';
import type { NextApiRequest, NextApiResponse } from 'next';
import { useEffect } from 'react';

export default function Write() {
  function checkLogin() {
    fetch('/api/login').then((res) => {
      console.log(res);
      // if (res.status === 200 && res.data.name) {
      //   // 로그인
      // } else {
      //   // 로그인 안됨
      //router.push("/login")
      // }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return <WritePage />;
}
