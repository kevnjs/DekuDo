import React, { useState } from "react";
import "../styles/TaskMenu.css"
import "../styles/AddTask.css"
import Task from "./Task";
import AddTask from "./AddTask";

const TaskMenu = (props) => {
    return (
        <div className="taskMenu">
            <AddTask showMenu={props.showMenu} set={props.set} setTasks={props.setTasks} tasks={props.tasks}/>
            <div className="tasksList">
                <div className="taskDesc">
                    <p id="task">Task Name</p>
                    <p id="category">Category</p>
                    <p id="xp">XP Gain</p>
                    <p id="date">Complete By:</p>
                </div>
            {
                props.tasks.map( (task, index) => {
                    return (
                        <Task 
                        key={index} 
                        task={task.task} 
                        category={task.category}
                        date={task.date}
                        completed={task.completed}
                        xp={task.xp}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}

export default TaskMenu;