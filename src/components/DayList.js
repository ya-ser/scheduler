import React from "react";
import classNames from "classnames";
import DayListItem from "./DayListItem";


export default function DayList(props) {
  const { days, day, setDay } = props;
  const parsedDays = days.map((oneDay) => {
    return <DayListItem 
      id={oneDay.id}
      name={oneDay.name}
      spots={oneDay.spots}
      selected={oneDay.name === day}
      setDay={setDay}
    />
  })

  return (
    <ul>
      {parsedDays}
    </ul>
  );
}