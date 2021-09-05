import { useState } from "react";
import PrioritiesComponent from "../components/priorlist";
import PriorityComponent from "../components/selectedpriority";
import StatusComponent from "../components/status";
import TodoTextComponent from "../components/todo";
import { Todo } from "./style";

const TodoComponent = ({ list }) => {
  const [priority, setFlag] = useState(false);

  const handlePriority = () => {
    setFlag(!priority);
  };

  const changePriority = () => {
    console.log("Priority changed");
  };

  return (
    <Todo.Wrapper>
      <TodoTextComponent list={list} />
      <Todo.Buttons>
        <StatusComponent />
        <PriorityComponent
          handlePriority={handlePriority}
          priority={priority}
        />
        <PrioritiesComponent show={priority} changePriority={changePriority} />
      </Todo.Buttons>
    </Todo.Wrapper>
  );
};

export default TodoComponent;
