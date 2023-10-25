import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="js-list">
        {props.tasks.map(task => (
            <li className={`list--item ${(task.done && props.hideDone) ? "task__hidden" : ""}`}>
                <span className={task.done ? "task__done" : ""}>{task.content}</span>
                <button class="delete task__button" onClick={() => (props.removeTask(task.id))}>🗑</button>
                <button class="done task__button" onClick={() => (props.toggleTaskDone(task.id))}>{(task.done) ? "✓" : ""}</button>
            </li>
        ))}
    </ul>
);

export default Tasks;