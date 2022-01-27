import React, { useState } from "react";
import "../styles/CharacterCard.css"

const CharacterCard = (props) => {
    const [showMenu, setMenu] = useState(true)
    const [menuText, setMenuText] = useState("")

    const onHover = (e) => {
        setMenu(false);
        if(showMenu && e.target.id === "completeBtn") {
            setMenuText("Mark a Task as complete (Attack)")
        } else if (showMenu && e.target.id === "deleteBtn") {
            setMenuText("Shield")
        } else if (showMenu && e.target.id === "inventoryBtn") {
            setMenuText("Inventory")
        } else if (showMenu && e.target.id === "addTaskBtn") {
            setMenuText("Add a task")
        } else if (showMenu && e.target.id === "delTaskBtn") {
            setMenuText("Delete a task")
        }
    }

    const hide = () => {
        if(showMenu === false) {
        setMenu(true)
        }
    }

    const handleClick = () => {
        props.setAddTask(true)
        console.log("click")
    }

    return (
        <div className="charContainer">
            <div className="charCard">
                <div id="character-img"></div>
                <div id="character-stats">
                    <p>Character Name</p>
                    <p>EXP</p>
                    <p>To next level</p>
                </div>
            </div>
            <div className="menuContainer">
                <div className={`description ${showMenu && "display"}`}>
                    <p>{menuText}</p>
                </div>
                <div className="mainMenu">
                    <div onMouseEnter={onHover} onMouseLeave={hide} id="completeBtn"className="Btn"></div>
                    <div onMouseEnter={onHover} onMouseLeave={hide} id="deleteBtn"className="Btn"></div>
                    <div onMouseEnter={onHover} onMouseLeave={hide} id="inventoryBtn"className="Btn"></div>
                    <div onMouseEnter={onHover} onClick={handleClick} onMouseLeave={hide} id="addTaskBtn"className="Btn"></div>
                    <div onMouseEnter={onHover} onMouseLeave={hide} id="delTaskBtn"className="Btn"></div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard;