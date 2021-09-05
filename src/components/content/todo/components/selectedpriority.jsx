import { Priority } from "./style";

const PriorityComponent = ({ handlePriority }) => {
  return (
    <Priority.Priority onClick={handlePriority}>
      <Priority.Color />
    </Priority.Priority>
  );
};

export default PriorityComponent;
