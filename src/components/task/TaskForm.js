// Author: Jake, Purpose: To give the user the ability to post a new article

import React from "react"
import { useState } from "react";
import { useHistory } from "react-router";
import { addTask } from "../../modules/TaskManager";
import "./Task.css"


export const TaskForm = () => {

    const [task, setTask] = useState({
		name: "",
		completionDate: "",
        status: false,
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

    const handleCancelButton = () => {
        history.push("/tasks")
    }

    const handleClickSaveTask = (event) => {
		event.preventDefault() 

	
			addTask(task)
				.then(() => history.push("/tasks"))
		}

    return (

        <form className="taskForm">
            <div className="create-a-task">
            <h2 className="taskForm__title">Create a new task</h2>
            <fieldset className="taskform-fieldset">
                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" onChange={handleControlledInputChange} className="form-control" placeholder="task name" />
                </div>
            </fieldset>
            </div>

            <fieldset className="taskform-fieldset">
                <div className="form-group">
                    <label htmlFor="completionDate">Completion Date</label>
                    <input type="datetime-local" id="completionDate" onChange={handleControlledInputChange}className="form-control" placeholder="completion date" />
                </div>
            </fieldset>
            <div className="save-button-task-move">
            <button className="save-button-task"
                onClick={handleClickSaveTask}>
                Save
            </button>
            <button className="save-button-task"
                onClick={handleCancelButton}>
                Cancel
            </button>
            </div>
        </form>

    )
}






