import LoginPage from '@pages/Login';

interface Props {
  setbLogin: (login: boolean) => void;
}

function Login({ setbLogin }: Props) {
  return <LoginPage setbLogin={setbLogin} />;
}

export default Login;
