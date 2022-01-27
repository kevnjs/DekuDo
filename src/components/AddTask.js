import React, { useState } from "react";  
import "../styles/AddTask.css"


const AddTask = (props) => {
    const [form, setForm] = useState({
        task: "",
        category: "",
        date: "",
        xp: 0,
        completed: false
    })

    const onClick = () => {
        props.set(false)
    }

    const onChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
            completed: false
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.setTasks([...props.tasks, form])
        setForm({
            task: "",
            category: "",
            date: "",
            xp: 0,
            completed: false
        })
        props.set(false)
        console.log(form)
    }

    return (
        <div className={`addTaskMenu ${!props.showMenu && "display"}`}>
            <div onClick={onClick} className="exIcon">
                <ion-icon name="close-outline"></ion-icon>
            </div>
            <div>
                <h2>Add a Task</h2>
                <form id="enterTask" onSubmit={onSubmit}>
                    <div id="enterTaskName">
                        <label className="taskName">Name</label>
                        <input onChange={onChange} name="task" value={form.task}className="textInput" type="text" />
                    </div>
                    <div id="enterCategory">
                        <label className="category">Category</label>
                        <input onChange={onChange} name="category" value={form.category} className="textInput" type="text" />
                    </div>
                    <div id="enterDate">
                        <label className="date">Date</label>
                        <input onChange={onChange} name="date" value={form.date} className="textInput" type="date" />
                    </div>
                    <div id="enterXP">
                        <label className="exp">XP Gain</label>
                        <select onChange={onChange} name="xp" className="xp" value={form.xp}>
                            <option value="0">Select</option>
                            <option value="1">Minor XP</option>
                            <option value="5">Small XP</option>
                            <option value="10">Medium XP</option>
                            <option value="20">Large XP</option>
                        </select>
                    </div>
                    <button className="submit">Add Task</button>
                </form>
                <br />
                {/* <button className="submit">Add Task</button> */}
            </div>
        </div>
        
    )
}

export default AddTask;