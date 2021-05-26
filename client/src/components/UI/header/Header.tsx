import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import styled from '@emotion/styled';

import { isLoginState } from '@state/index';
import { BP } from '@theme/index';
import BurgerMenu from './BurgerMenu';

function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [activeMenu, setActiveMenu] = useState('blog');

  useEffect(() => {
    const data = localStorage.getItem('seunggyu');
    data ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    const pathName = router.pathname;
    pathName === '/' ? setActiveMenu('blog') : setActiveMenu(pathName.slice(1));
  }, [router.pathname]);

  const logout = () => {
    localStorage.removeItem('seunggyu');
    setIsLogin(false);
  };

  const goLink = ({ target }: any) => {
    const name = target.dataset.name;
    name === 'logo' || name === 'blog' ? router.push('/') : router.push(`/${name}`);
  };

  return (
    <UnderLineBox>
      <HeaderWrapper>
        <Logo>
          <Image
            data-name="logo"
            src="/SEUNGGYU.svg"
            alt="Picture of the author"
            width={180}
            height={41}
            onClick={goLink}
          />
        </Logo>

        <Menu>
          <List data-name="blog" className={activeMenu === 'blog' ? 'active' : ''} onClick={goLink}>
            Blog
          </List>

          <List
            data-name="series"
            className={activeMenu === 'series' ? 'active' : ''}
            onClick={goLink}
          >
            Series
          </List>

          {isLogin ? (
            <>
              <List
                data-name="write"
                className={activeMenu === 'write' ? 'active' : ''}
                onClick={goLink}
              >
                write
              </List>
              <span onClick={logout}>Logout</span>
            </>
          ) : (
            <List
              data-name="login"
              className={activeMenu === 'login' ? 'active' : ''}
              onClick={goLink}
            >
              Login
            </List>
          )}
        </Menu>
        <BurgerMenu />
      </HeaderWrapper>
    </UnderLineBox>
  );
}

const UnderLineBox = styled.div`
  width: 100%;
  border-bottom: ${({ theme }) => theme.border};
`;

const HeaderWrapper = styled.header`
  max-width: 1200px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.div`
  margin: 27px;
  margin-left: 27px;
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;

  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

const List = styled.li<{ active?: boolean }>`
  display: flex;
  margin-right: 20px;
  font-size: 2.1em;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.activeColor};
    font-weight: 500;
  }
`;

export default Header;
