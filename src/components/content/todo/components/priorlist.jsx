import { Priorities } from "./style";

const PrioritiesComponent = () => {
  return (
    <Priorities.PriorityList>
      <Priorities.PriorityListItemWrap>
        <Priorities.PriorityListItem bgcolor={"Red"} title="High" />
      </Priorities.PriorityListItemWrap>
      <Priorities.PriorityListItemWrap>
        <Priorities.PriorityListItem bgcolor={"#ffe700"} title="Medium" />
      </Priorities.PriorityListItemWrap>
      <Priorities.PriorityListItemWrap>
        <Priorities.PriorityListItem bgcolor={"Green"} title="Low" />
      </Priorities.PriorityListItemWrap>
      <Priorities.PriorityListItemWrap>
        <Priorities.PriorityListItem bgcolor={"White"} title="No Priority" />
      </Priorities.PriorityListItemWrap>
    </Priorities.PriorityList>
  );
};

export default PrioritiesComponent;
