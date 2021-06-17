import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';

import { isLoginState } from '@state/index';
import { BP } from '@theme/index';
import { useTheme } from '@context/themeProvider';
import BurgerMenu from './BurgerMenu';
import Logo from './Logo';

function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [activeMenu, setActiveMenu] = useState('blog');
  let [mode, _] = useTheme();

  useEffect(() => {
    const data = localStorage.getItem('seunggyu');
    data ? setIsLogin(true) : setIsLogin(false);
  }, []);

  useEffect(() => {
    const pathName = router.pathname;
    pathName === '/' ? setActiveMenu('blog') : setActiveMenu(pathName.slice(1));
  }, [router.pathname]);

  const logout = useCallback(() => {
    localStorage.removeItem('seunggyu');
    setIsLogin(false);
  }, []);

  const goLink = useCallback(({ target }: any) => {
    const name = target.dataset.name;
    name === 'logo' || name === 'blog' ? router.push('/') : router.push(`/${name}`);
  }, []);

  return (
    <>
      <HeaderWrapper>
        <Logo mode={mode} goLink={goLink} />
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
        <BurgerMenu goLink={goLink} />
      </HeaderWrapper>
      <UnderLine />
    </>
  );
}

const UnderLine = React.memo(styled.hr`
  border: ${({ theme }) => theme.border};
`);

const HeaderWrapper = styled.header`
  max-width: 1200px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Menu = styled.ul`
  display: flex;

  @media (max-width: ${BP.TABLET}) {
    display: none;
  }
`;

const List = styled.li<{ active?: boolean }>`
  display: flex;
  margin-left: 0px;
  margin-right: 20px;
  font-size: 2.1em;
  cursor: pointer;

  &.active {
    color: ${({ theme }) => theme.activeColor};
    font-weight: 500;
  }
`;

export default React.memo(Header);
