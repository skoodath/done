import styled from "styled-components";

export const Todo = {
  Wrapper: styled.article`
    width: 70%;
    max-width: 768px;
    height: 120px;
    //box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    //background-color: #f5fdff;
    border-bottom: 1px solid #ecdcdc;
  `,

  Buttons: styled.div`
    height: 40px;
    display: flex;
    align-items: center;
  `,

  PriorityList: styled.div`
    height: 20px;
    width: 100px;
    border-radius: 3px;
    display: flex;
  `,
  PriorityListItemWrap: styled.div`
    border-radius: 3px;
    height: 20px;
    width: 20px;
    margin: 0 0.5rem 0 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  PriorityListItem: styled.div`
    height: 15px;
    width: 15px;
    background-color: ${({ bgcolor }) => bgcolor};
    border-radius: 3px;
  `,
};
