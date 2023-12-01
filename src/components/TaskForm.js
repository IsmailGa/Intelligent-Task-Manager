import GetCurrentDateTime from "./CurrenDate";
import { useState } from "react";


function TodoList({ addTask }) {
  const [placeholder, setPlaceholder] = useState("Yangi vazifa yo'zish");
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());


  const [task, setTask] = useState("");
  const [deadLine, setDeadLine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      element: task,
      deadLine: deadLine,
    };

    setShow((show) => !show);

    addTask(newTask);
    setPlaceholder("Yangi vazifa yo'zish");
  };


  return (
    <div className="tm-Navbar">
      
        <form className="tm-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder={placeholder}
          onChange={(e) => setTask(e.target.value)}
          className="tm-Placeholder"
          required
          minLength="5"
        />
          <input className="tm-Button" type="submit" value="+"/>
        </form>
        
      <GetCurrentDateTime /> {/*  Current date  */}
    </div>
  );
}

export default TodoList;
