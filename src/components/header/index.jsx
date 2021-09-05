import React, { useContext } from "react";
import { NavbarContext } from "../../context";
import { Header } from "./style";

const HeaderComponent = () => {
  const { navbar, setNavbar } = useContext(NavbarContext);

  const handleClick = () => {
    setNavbar(!navbar);
  };

  return (
    <Header.Wrapper>
      <Header.Inner>
        <Header.Menu onClick={handleClick}></Header.Menu>
        <Header.SearchWrap>
          <Header.Search type="search" tabIndex="0" />
          <Header.SearchIcon />
        </Header.SearchWrap>
        <Header.NewTask />
      </Header.Inner>
    </Header.Wrapper>
  );
};

export default HeaderComponent;
