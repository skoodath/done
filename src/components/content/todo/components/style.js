import { IoCheckmarkSharp } from "react-icons/io5";
import styled from "styled-components";

export const Priorities = {
  PriorityList: styled.div`
    height: 25px;
    width: 105px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ show }) => (show ? 1 : 0)};
    overflow: hidden;
    transition: opacity 0.3s ease-in;
    transform-origin: left;
  `,
  PriorityListItemWrap: styled.div`
    border-radius: 3px;
    height: 20px;
    width: 20px;
    margin: 0 0.5rem 0 0;
    //box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #dddddd;
  `,
  PriorityListItem: styled.div`
    height: 15px;
    width: 15px;
    background-color: ${({ bgcolor }) => bgcolor};
    border-radius: 3px;
  `,
};

export const Status = {
  Status: styled.div`
    height: 20px;
    width: 20px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem 0 0;
    cursor: pointer;
  `,
  Check: styled(IoCheckmarkSharp)`
    font-size: 1.2rem;
  `,
};

export const Priority = {
  Priority: styled.div`
    height: 20px;
    width: 20px;
    border-radius: 3px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 1rem 0 0;
  `,
  Color: styled.div`
    height: 15px;
    width: 15px;
    background-color: red;
    border-radius: 3px;
  `,
};

export const TodoText = {
  Wrapper: styled.div`
    height: 60px;
  `,
  Text: styled.p`
    word-wrap: break-word;
    font-size: 1.2rem;
  `,
};

export const TodoInput = {
  Wrapper: styled.div`
    height: 60px;
  `,
  Input: styled.input`
    font-size: 1.2rem;
    width: 100%;
    border: none;
    resize: none;
    background-color: #fcfcfc;
    padding: 0.5rem;
    outline: 1px solid #dddddd;
    border-radius: 3px;
  `,
};
