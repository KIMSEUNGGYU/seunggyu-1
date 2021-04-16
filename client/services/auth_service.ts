interface AuthService {
  login: () => void;
}

export default class AuthServiceImpl implements AuthService {
  constructor() {}
  login() {}

  logout() {}
}
