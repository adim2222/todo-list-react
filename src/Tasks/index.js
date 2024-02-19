import React from "react";
import { List, ListItem, TaskName, TaskButton } from "./styled";

const Tasks = (props) => (
    <List>
        {props.tasks.map(task => (
            <ListItem hidden={task.done && props.hideDone}>
                <TaskName done={task.done}>{task.content}</TaskName>
                <TaskButton remove onClick={() => (props.removeTask(task.id))}>🗑</TaskButton>
                <TaskButton done onClick={() => (props.toggleTaskDone(task.id))}>{(task.done) ? "✓" : ""}</TaskButton>
            </ListItem>
        ))}
    </List>
);

export default Tasks;