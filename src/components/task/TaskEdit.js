import React, { useState, useEffect } from "react"
import { getTaskById, updateTask } from "../../modules/TaskManager"
import { useParams, useHistory } from "react-router"
import "./Task.css"

export const TaskEdit = () => {
    const [task, setTask] = useState({ name: "", completionDate: "" });
    const [isLoading, setIsLoading] = useState(false);

    const { taskId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };

    const updateCompletedTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, so we need the id
        const editedTask = {
            id: taskId,
            name: task.name,
            completionDate: task.completionDate
        };

        updateTask(editedTask)
            .then(() => history.push("/tasks")
            )
    }

    useEffect(() => {
        getTaskById(taskId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="name"
                            value={task.name}
                        />
                        <label htmlFor="name">Task</label>

                        <input
                            className="taskform" type="datetime-local" id="completionDate" onChange={handleFieldChange}className="form-control" placeholder="completion date" />
                    
                        <label htmlFor="completionDate">Completion Date</label>
                    </div>
                    <div className="alignRight">
                     
                    </div>
                    <div>
                        <button type="button" onClick={updateCompletedTask}>Update</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}
