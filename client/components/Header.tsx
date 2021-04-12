import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";

import { theme } from "@theme/index";

const Head = styled.header`
  /* max-width: 1200px; */
  /* width: 1200px; */
  width: 100%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.BORDER_COLOR};
`;

const Logo = styled.div`
  margin: 27px;
  margin-left: 27px;
`;

const Menu = styled.ul`
  display: flex;
  margin: 27px;
  margin-right: 45px;
`;

const List = styled.li<{ choice?: boolean }>`
  margin-right: 20px;
  font-size: 2.1em;
  cursor: pointer;
  ${(props) =>
    props.choice &&
    css`
      font-weight: bold;
      color: ${theme.MAIN_COLOR};
    `}
`;

function Header() {
  return (
    <Head>
      <Logo>
        <Image
          src="/SEUNGGYU.svg"
          alt="Picture of the author"
          width={180}
          height={41}
        />
      </Logo>
      <Menu>
        <List choice>Blog</List>
        <List>Series</List>
        <List>Login</List>
      </Menu>
    </Head>
  );
}

export default Header;
