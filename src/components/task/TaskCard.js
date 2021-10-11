import React from "react"
import { useHistory } from "react-router-dom"
import { completeTask } from "../../modules/TaskManager";


export const TaskCard = ({ task, reload, handleDeleteTask }) => {
    const [date, time] = task.completionDate.split("T")
    
    
    const history = useHistory();
    const handleCheckboxChange = (event) => {
        completeTask(task).then(reload)
    
        
    }

    return (

<section className="task">
    <h3 className="task__name">{task.name}</h3>
    <h3 className="task__time">{time}</h3>
    <h3 className="task__date">{date}</h3> 
    <input onChange={handleCheckboxChange}type="checkbox"></input>
    <button type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>

</section>
    )}