import styled from "styled-components";

export const Todo = {
  Wrapper: styled.article`
    width: 70%;
    max-width: 768px;
    //box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    //background-color: #f5fdff;
  `,

  Buttons: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
  `,
};
