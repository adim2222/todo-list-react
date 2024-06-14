import React from "react";
import { InputDiv, AddTaskButton, TaskInput } from "./styled";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef();

    const dispatch = useDispatch();

    const onTaskAdd = () => {
        inputRef.current.focus();
        if (newTaskContent !== "") {
            dispatch(addTask({
                content: newTaskContent,
                done: false,
                id: nanoid(),
            }))
            setNewTaskContent("")
        }
    }

    const keyPressHandler = (e) => {
        if (e.key === "Enter") {
            onTaskAdd();
        }
    }

    return (
        <InputDiv>
            <TaskInput onKeyDown={keyPressHandler} ref={inputRef} placeholder="Co jest do zrobienia?" type="text" value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)}/>
            <AddTaskButton onClick={onTaskAdd}>Dodaj zadanie</AddTaskButton>
        </InputDiv>
    )
};

export default Form;