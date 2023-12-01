import { useState, useEffect } from 'react';
import './App.css';
import Tasks from './Tasks';
import TodoList from './TaskForm';


function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const handleClick = () =>{
    if(addTask){
      setCounter(counter + 1);
    }
  }
  const addTask = (task) => {
    setTasks([...tasks, task]);
    handleClick();
  };

  
  


  useEffect(()=>{
    console.log("Check");
  },[])

  return (
    <div className="App">
      <div className="container">
      
        <div className="task-manager">
        <h1 className="tm-title">
              Vazifalar Menedjeri
            </h1>
            <TodoList addTask={addTask} />
            <Tasks tasks={tasks} />
            <div className="counter">
            {counter}
              </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
