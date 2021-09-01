import PrioritiesComponent from "../components/priorlist";
import PriorityComponent from "../components/selectedpriority";
import StatusComponent from "../components/status";
import TodoTextComponent from "../components/todo";
import { Todo } from "./style";

const TodoComponent = () => {
  return (
    <Todo.Wrapper>
      <TodoTextComponent />
      <Todo.Buttons>
        <StatusComponent />
        <PriorityComponent />
        <PrioritiesComponent />
      </Todo.Buttons>
    </Todo.Wrapper>
  );
};

export default TodoComponent;
