import React from "react";
import "./style.css";
import { useState } from "react";

const Form = ({addTask}) => {
    
    const [newTaskContent, setNewTaskContent] = useState("");

    const onTaskAdd = () => {
        if (newTaskContent !== "") {
            addTask(newTaskContent)
            setNewTaskContent("")
        }
    }

    return (
        <div className="input__div">
            <input placeholder="Co jest do zrobienia?" className="js-input" type="text" value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)}/>
            <button className="js-button add-task" onClick={onTaskAdd}>Dodaj zadanie</button>
        </div>
    )
};

export default Form;