import React from "react";
import { useState } from "react";

function Task({ task }) {
  const [checked, setChecked] = useState([]);
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  const isChecked = (task) =>
    checked.includes(task) ? "checked-item" : "not-checked-item";

  return (
    <div className="task">
      <ul className={isChecked(task)}>
        <input type="checkbox" onChange={handleCheck} value={task}/>
        <span className="checkmark"></span>
        <li>{task.element}</li>
      </ul>
      <div>{task.deadLine}</div>
    </div>
  );
}

export default Task;
