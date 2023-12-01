import React from 'react';
import Task from "./Task.js";
import { useState } from 'react';

function Tasks({tasks}){

    const [currentDate, setCurrentDate] = useState(new Date());
    let date = currentDate.getDate();
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    let hours = currentDate.getHours().toString().padStart(2, '0');
    const time = hours + ":" + minutes;
    
    const deadLine = time.toString();

    return(
    <div className="tasks">
        {
            
        }
            <h1 className="tasks-title-time">Bugun:</h1>
            {
                tasks.map((task, index) => (
                        <Task key={index} task={task} deadLine={deadLine}/>
                   ))
            }
           
            
        </div>
    )
}


export default Tasks;