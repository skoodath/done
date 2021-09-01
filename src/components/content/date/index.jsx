import React from "react";
import { MyDate } from "./style";

const DateComponent = () => {
  return (
    <MyDate.Wrapper>
      <MyDate.Date>
        <MyDate.Weekday>
          {new Date().toLocaleString("en-US", {
            weekday: "long",
          })}
        </MyDate.Weekday>
        <MyDate.ThisDate>
          {new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </MyDate.ThisDate>
      </MyDate.Date>
    </MyDate.Wrapper>
  );
};

export default DateComponent;
