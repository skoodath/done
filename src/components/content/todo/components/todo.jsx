import { TodoText } from "./style";

const TodoTextComponent = ({ list }) => {
  return (
    <TodoText.Wrapper>
      <TodoText.Text>{list.task}</TodoText.Text>
    </TodoText.Wrapper>
  );
};

export default TodoTextComponent;
