import React from "react";
import { menuData } from "../../data/data";
import { Nav, Logo, LogoSpan, MenuBars, NavMenu, NavMenuLinks } from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <Logo>
        Dupex<LogoSpan>&nbsp;Builders</LogoSpan>
      </Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}
