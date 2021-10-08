import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../modules/TaskManager";
import { TaskCard } from "./TaskCard";
import { useHistory } from "react-router";
import { deleteTask } from "../../modules/TaskManager";


export const TaskList = () => {

    const [task, setTasks] = useState([]);
    const history = useHistory();
    const getTasks = () => {

        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)

        });
    };

    const reload = () => {
        getTasks()
    }

    const handleDeleteTask = id => {
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    }

    useEffect(() => {

        getTasks();
    }, []);


    return (

        <>
            

            <section className="section-content">


                <section>
                    <div className="taskbutton">
                        <button className="taskcreate-button" onClick={() => history.push("/tasks/create")}>Create a Task</button>
                    </div>
                </section>


            </section>
            <div className="container-cards">
                {task.map(task =>
                    <TaskCard reload={reload}
                        key={task.id}
                        task={task} handleDeleteTask={handleDeleteTask} />)}
                        
            </div>
        </>
    );
};