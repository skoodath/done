import React, { useReducer, useState } from "react";
import { Content } from "./style";
import DateComponent from "./date";
import TodoComponent from "./todo/show";
import NewTodoComponent from "./todo/new";

const initialState = {
  todo: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        task: action.payload,
        completed: false,
      };
      return {
        todo: [newTodo, ...state.todo],
      };
    default:
      return { ...state };
  }
};

const ContentComponent = () => {
  const [task, setTask] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      dispatch({
        type: "ADD_TODO",
        payload: task,
      });
      setTask("");
    }
  };

  return (
    <Content.Wrapper>
      <DateComponent />
      <NewTodoComponent
        handleSubmit={handleSubmit}
        task={task}
        handleChange={handleChange}
      />
      {state.todo.map((t) => (
        <TodoComponent list={t} key={t.id} />
      ))}
    </Content.Wrapper>
  );
};

export default ContentComponent;
