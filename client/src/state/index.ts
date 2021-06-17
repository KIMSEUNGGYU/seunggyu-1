import { atom } from 'recoil';

export const isLoginState = atom({
  key: 'isLogin',
  default: false,
});

export const themeModeState = atom({
  key: 'themeModeState',
  default: 'light',
});
