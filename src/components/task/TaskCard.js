import React from "react"
import { useHistory } from "react-router-dom"
import { completeTask, updateTask } from "../../modules/TaskManager";
import { Link } from "react-router-dom";
import "./Task.css"


export const TaskCard = ({ task, reload, handleDeleteTask }) => {
    const [date, time] = task.completionDate.split("T")
    
    
    const history = useHistory();
    const handleCheckboxChange = (event) => {
        completeTask(task).then(reload)
    
        
    }

    return (

<section className="task">
    <div className="task-posts">
    <div> 
    <input className="checkbox" onChange={handleCheckboxChange}type="checkbox" id="check"></input>
    <label className="checkLabel"for="check">completed</label>  
    </div>
    <h3 className="task__name">{task.name}</h3>
    <h3 className="task__time">{time}</h3>
    <h3 className="task__date">{date}</h3>
    <button class="task-delete-edit" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
    <button class="task-delete-edit" type="button"
        onClick={() => history.push(`/tasks/${task.id}/edit`)}>
        Edit
    </button>
    </div>
    <hr></hr>
    <Link to={`/tasks/${task.id}/edit`}>
    
  </Link>
   
   
</section>
    )}