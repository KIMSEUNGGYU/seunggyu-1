import Login from '@login/Login';

interface Props {
  setbLogin: (login: boolean) => void;
}

function LoginPage({ setbLogin }: Props) {
  return <Login setbLogin={setbLogin} />;
}

export default LoginPage;
