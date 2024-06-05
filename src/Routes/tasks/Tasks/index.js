import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, TaskName, TaskButton } from "./styled";
import { selectTasksByQuery } from "../../../tasksSlice";
import { removeTask, toggleTaskDone } from "../../../tasksSlice";
import { useLocation } from "react-router-dom"

const Tasks = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");

    const {tasks, hideDone} = useSelector(state => selectTasksByQuery(state, query));
    const dispatch = useDispatch();
    return (
        <List>
            {tasks.map(task => (
                <ListItem hidden={task.done && hideDone}>
                    <TaskName done={task.done}>{task.content}</TaskName>
                    <TaskButton remove onClick={() => (dispatch(removeTask(task.id)))}>🗑</TaskButton>
                    <TaskButton done onClick={() => (dispatch(toggleTaskDone(task.id)))}>{(task.done) ? "✓" : ""}</TaskButton>
                </ListItem>
            ))}
        </List>
    )
}

export default Tasks;