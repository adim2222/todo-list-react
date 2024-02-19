import React from "react";
import {InputDiv, AddTaskButton, TaskInput} from "./styled";
import { useState, useRef } from "react";

const Form = ({addTask}) => {
    
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const onTaskAdd = () => {
        inputRef.current.focus();
        if (newTaskContent !== "") {
            addTask(newTaskContent)
            setNewTaskContent("")
        }
    }

    return (
        <InputDiv>
            <TaskInput ref={inputRef} placeholder="Co jest do zrobienia?" type="text" value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)}/>
            <AddTaskButton onClick={onTaskAdd}>Dodaj zadanie</AddTaskButton>
        </InputDiv>
    )
};

export default Form;