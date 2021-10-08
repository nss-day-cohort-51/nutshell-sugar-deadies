import React from "react"
import { useState } from "react";
import { useHistory } from "react-router";
import { addTask } from "../../modules/TaskManager";


export const TaskForm = () => {

    const [task, setTask] = useState({
		name: "",
		completionDate: "",
        status:false,
        userId: sessionStorage.getItem("nutshell_user"),
		
	});

    const history = useHistory();

    const handleControlledInputChange = (event) => {
	
		const newTask = { ...task }
		let selectedVal = event.target.value
		
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
	
		newTask[event.target.id] = selectedVal
		
		setTask(newTask)
	}

    const handleClickSaveTask = (event) => {
		event.preventDefault() 

	
			addTask(task)
				.then(() => history.push("/tasks"))
		}

    return (

        <form className="taskForm">
            <h2 className="taskForm__title">Creat a new task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input className="taskform" type="text" id="name" onChange={handleControlledInputChange} className="form-control" placeholder="task name" />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="completionDate">Completion Date</label>
                    <input className="taskform" type="datetime-local" id="completionDate" onChange={handleControlledInputChange}className="form-control" placeholder="completion date" />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveTask}>
                Save Task
            </button>
        </form>

    )
}






