import React from "react";
import "./style.css";

const Buttons = ({hideDoneTasks, tasks}) => (
    <div className="js-buttons-div function__buttons">
        <span className="list--header">Lista zadań:</span>
        <button className="hide">{hideDoneTasks ? "Pokaż" : "Ukryj"} Ukończone</button>
        <button className={`complete ${tasks.every(({ done }) => done) ? "disabled" : ""}`}>Ukończ wszystkie</button>
    </div>
);

export default Buttons;