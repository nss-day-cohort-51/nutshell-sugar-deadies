import React from "react"
import { useHistory } from "react-router-dom"



export const TaskCard = ({ task }) => {
    const history = useHistory();

    return (

<section className="task">
    <h3 className="task__name">{task.name}</h3>
    <h3 className="task__completion-date">{task.completionDate}</h3>
    {/* <button type="button" onClick={() => handleDeleteTask(task.id)}>Discharge</button> */}
   
  



</section>
    )}