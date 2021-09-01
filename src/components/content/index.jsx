import React from "react";
import { Content } from "./style";
import DateComponent from "./date";
import TodoComponent from "./todo/show";
import NewTodoComponent from "./todo/new";

const ContentComponent = () => {
  return (
    <Content.Wrapper>
      <DateComponent />
      <NewTodoComponent />
      <TodoComponent />
      <TodoComponent />
      <TodoComponent />
    </Content.Wrapper>
  );
};

export default ContentComponent;
