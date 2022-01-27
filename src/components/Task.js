import React from "react";
import "../styles/Task.css"

const Task = (props) => {
    return (
        <div className="task">
            <p>{props.task} </p>
            <p>{props.category} </p>
            <p>{props.xp}XP</p>
            <p className="dateText">{props.date}</p>
        </div>
    )
}

export default Task;