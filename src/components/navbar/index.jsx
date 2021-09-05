import React, { useContext } from "react";
import { NavbarContext } from "../../context";
import { Navbar } from "./style";

const NavbarComponent = () => {
  const { navbar, setNavbar } = useContext(NavbarContext);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <Navbar.Wrapper open={navbar} onClick={handleClick}>
      Navbar
    </Navbar.Wrapper>
  );
};

export default NavbarComponent;
