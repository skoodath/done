import styled from "styled-components";
import { palette } from "../common.style";
import { IoSearch, IoMenu } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";

export const Header = {
  Wrapper: styled.header`
    background-color: ${palette.headerBG};
    padding: 1rem;
    display: flex;
    align-items: center;
    height: 50px;
    box-shadow: 1px 0 3px 1px rgba(0, 0, 0, 0.2);
  `,
  Menu: styled(IoMenu)`
    color: #ffffff;
    font-size: 2.5rem;
    cursor: pointer;
  `,
  SearchWrap: styled.div`
    height: 30px;
    width: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    overflow: hidden;
  `,
  Search: styled.input`
    margin: 0 1rem;
    height: 30px;
    width: 200px;
    outline: none;
    border: none;
    padding: 0.5rem;
    border-radius: 3px;
  `,
  SearchIcon: styled(IoSearch)`
    color: ${palette.headerBG};
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
    cursor: pointer;
  `,
  NewTask: styled(MdAddBox)`
    color: #ffffff;
    font-size: 3rem;
    cursor: pointer;
    margin: 0 0 0 auto;
  `,
};
