import React from "react";
import "./style.css";

const Buttons = ({hideDone, tasks, toggleHideDone, toggleAllDone}) => (
    <div className="js-buttons-div function__buttons">
        <span className="list--header">Lista zadań:</span>
        <button className="hide" onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} Ukończone</button>
        <button className={`complete ${tasks.every(({ done }) => done) ? "disabled" : ""}`} onClick={toggleAllDone}>Ukończ wszystkie</button>
    </div>
);

export default Buttons;