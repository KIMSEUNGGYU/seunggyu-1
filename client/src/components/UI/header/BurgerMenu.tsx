import styled from '@emotion/styled';
import { MenuOutlined } from '@ant-design/icons';
import { BP } from '@theme/index';
import { useState } from 'react';
import { useRouter } from 'next/router';

const BurgerMenu = () => {
  const router = useRouter();

  const [isToggle, setIsToggle] = useState(false);

  const handleChangeToggle = () => setIsToggle(!isToggle);

  const goLink = ({ target }: any) => {
    const name = target.dataset.name;
    name === 'logo' || name === 'blog' ? router.push('/') : router.push(`/${name}`);
    setIsToggle(false);
  };

  return (
    <>
      <BurgerMenuIcon onClick={handleChangeToggle} />
      {isToggle && (
        <MenuList>
          <li data-name="blog" onClick={goLink}>
            블로그
          </li>
          <li data-name="series" onClick={goLink}>
            시리즈
          </li>
        </MenuList>
      )}
    </>
  );
};

const BurgerMenuIcon = styled(MenuOutlined)`
  display: none;

  @media (max-width: ${BP.TABLET}) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const MenuList = styled.ul`
  display: none;
  color: ${({ theme }) => theme.primaryColor};

  li:hover {
    color: ${({ theme }) => theme.hoverColor};
  }

  @media (max-width: ${BP.TABLET}) {
    display: block;
    background: ${({ theme }) => theme.burgerMenuBackgroundColor};
    border: ${({ theme }) => theme.border};
    padding: 0.2em;
    position: absolute;
    right: 8px;
    bottom: -10px;
  }
`;

export default BurgerMenu;
