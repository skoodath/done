import TodoInputComponent from "../components/new";
import PrioritiesComponent from "../components/priorlist";
import PriorityComponent from "../components/selectedpriority";

import { Todo } from "./style";

const NewTodoComponent = () => {
  return (
    <Todo.Wrapper>
      <TodoInputComponent />
      <Todo.Buttons>
        <PriorityComponent />
        <PrioritiesComponent />
      </Todo.Buttons>
    </Todo.Wrapper>
  );
};

export default NewTodoComponent;
