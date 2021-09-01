import React from "react";
import { Header } from "./style";

const HeaderComponent = () => {
  return (
    <Header.Wrapper>
      <Header.Menu></Header.Menu>

      <Header.SearchWrap>
        <Header.Search type="search" tabIndex="0" />
        <Header.SearchIcon />
      </Header.SearchWrap>
      <Header.NewTask />
    </Header.Wrapper>
  );
};

export default HeaderComponent;
