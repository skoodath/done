import { Todo } from "./style";
import { TodoInput } from "../components/style";

const NewTodoComponent = ({ handleSubmit, task, handleChange }) => {
  return (
    <Todo.Wrapper>
      <TodoInput.Wrapper>
        <TodoInput.Input
          placeholder="Add your task here"
          value={task}
          onChange={handleChange}
          onKeyDown={handleSubmit}
        />
      </TodoInput.Wrapper>
      {/* <Todo.Buttons>
        <PriorityComponent handlePriority={handlePriority} />
        <PrioritiesComponent show={priority} />
      </Todo.Buttons> */}
    </Todo.Wrapper>
  );
};

export default NewTodoComponent;
