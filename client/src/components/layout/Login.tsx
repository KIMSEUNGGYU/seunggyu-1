import HeadWrapper from '@components/Head';
import Login from '@login/Login';

function LoginLayout() {
  return (
    <>
      <HeadWrapper title="LOGIN" description="안전한 로그인 / 관리자만 사용할 수 있습니다." />
      <Login />
    </>
  );
}

export default LoginLayout;
