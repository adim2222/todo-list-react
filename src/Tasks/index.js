import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="js-list">
        {props.tasks.map(task => (
            <li className={`list--item ${(task.done && props.hideDoneTasks) ? "task__hidden" : ""}`}>
                <span className={task.done ? "task__done" : ""}>{task.content}</span>
                <button class="delete task__button">🗑</button>
                <button class="done task__button">{(task.done) ? "✓" : ""}</button>
            </li>
        ))}
    </ul>
);

export default Tasks;