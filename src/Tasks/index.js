import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, TaskName, TaskButton } from "./styled";
import { selectTasks } from "../tasksSlice";
import { removeTask, toggleTaskDone } from "../tasksSlice";

const Tasks = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
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