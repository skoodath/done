import styled from "styled-components";

export const MyDate = {
  Wrapper: styled.div`
    width: 70%;
    max-width: 768px;
    height: 50px;
    padding: 1rem;
    background-color: #ffeace;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Date: styled.div`
    font-size: 1.2rem;
  `,
  Weekday: styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0.5rem 0 0;
    text-transform: uppercase;
  `,
  ThisDate: styled.span`
    font-weight: 500;
  `,
};
