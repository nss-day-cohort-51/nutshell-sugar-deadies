// Author: Jake, Purpose: To format the way each article will show on the DOM
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

    const readableDate = new Date(task.completionDate).toLocaleDateString();
    const readableTime = new Date(task.completionDate).toLocaleTimeString([], { timeStyle: 'short' });



    return (

        <section className="task">
            <div className="task-posts">
                <h3 className="task__name">{task.name}</h3>
                <h3 className="task__time">{readableTime}</h3>
                <h3 className="task__date">{readableDate}</h3>
                <div>
                    <input className="checkbox" onChange={handleCheckboxChange} type="checkbox" id="check"></input>
                    <label className="checkLabel" htmlFor="check">completed</label>
                </div>
                <button className="task-delete-edit" type="button"
                    onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                    Edit
                </button>
                <button class="task-delete-edit" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
            <hr></hr>
            <Link to={`/tasks/${task.id}/edit`}>

            </Link>


        </section>
    )
}