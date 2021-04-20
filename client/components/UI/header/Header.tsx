import React, { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";

import { theme } from "@theme/index";

const Head = styled.header`
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
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  margin: 27px;
  margin-right: 45px;
`;

const List = styled.li<{ active?: boolean }>`
  margin-right: 20px;
  font-size: 2.1em;
  cursor: pointer;

  &.active {
    color: ${theme.MAIN_COLOR};
  }
`;

const Header: FC = () => {
  const router = useRouter();
  let activeMenu;

  if (router.pathname === "/") {
    activeMenu = "blog";
  } else if (router.pathname === "/series") {
    activeMenu = "series";
  } else if (router.pathname === "/write") {
    activeMenu = "write";
  }

  const goLink = ({ target }) => {
    switch (target.dataset.name) {
      case "logo":
      case "blog":
        router.push("/");
        break;
      case "series":
        router.push("/series");
        break;
      case "write":
        router.push("/write");
        break;
      default:
        throw new Error(`제공하지 않은 메뉴: ${target.dataset.name}`);
    }
  };

  return (
    <Head>
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
        <List
          data-name="blog"
          className={activeMenu === "blog" ? "active" : ""}
          onClick={goLink}
        >
          Blog
        </List>

        <List
          data-name="series"
          className={activeMenu === "series" ? "active" : ""}
          onClick={goLink}
        >
          Series
        </List>

        <List
          data-name="write"
          className={activeMenu === "write" ? "active" : ""}
          onClick={goLink}
        >
          Write
        </List>
      </Menu>
    </Head>
  );
};

export default Header;
