import Head from 'next/head';

import Login from 'src/components/UI/login/Login';

function LoginPage() {
  return (
    <>
      <Head>
        <title>LGOIN | SEUNGGYU</title>
        <meta name="description" content="안전한 로그인 / 관리자만 사용할 수 있습니다." />
        <meta name="og:title" content="SEUNGGYU" />
        <meta
          name="og:image"
          content="https://res.cloudinary.com/du4w00gvm/image/upload/v1619410321/main_image.png"
        />
        <meta name="og:description" content="안전한 로그인 / 관리자만 사용할 수 있습니다." />
        {/* Mixed Content Error fix */}
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <Login />
    </>
  );
}

export default LoginPage;
