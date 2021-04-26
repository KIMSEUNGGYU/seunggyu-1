import type { NextApiRequest, NextApiResponse } from 'next';
import { Get, makeSHA256 } from '@util/util';

interface User {
  id: string;
  password: string;
}

async function isLogin(user: User) {
  const getUser = await Get('http://localhost:4000/user');
  if (getUser.userId === user.id && getUser.password === makeSHA256(user.password)) {
    return true;
  } else {
    return false;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const user = req.body;
    const sucess = await isLogin(user);
    if (sucess) {
      // 로그인 성공
      res.setHeader('Set-Cookie', 'name=Root;Max-Age=3600;HttpOnly;Secure');
      res.status(200).json({ messag: 'OK' });
    } else {
      res.status(401).json({ message: '로그인 실패' });
    }
  }
};
