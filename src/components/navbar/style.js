import styled from "styled-components";
import { palette } from "../common.style";

export const Navbar = {
  Wrapper: styled.nav`
    position: fixed;
    height: calc(100vh - 50px);
    z-index: 99;
    width: 300px;
    transform: ${({ open }) => (open ? `translateX(0)` : `translateX(-313px)`)};
    transition: transform 0.3s ease-in;
    left: 0;
    background-color: ${palette.menuBG};
    box-shadow: 5px 0 8px rgba(0, 0, 0, 0.11);
  `,
};
