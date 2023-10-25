import React from "react";
import "./style.css";

import Tasks from "../Tasks";
import Buttons from "../Buttons";
  
const List = ({hideDone, toggleHideDone, tasks, removeTask, toggleTaskDone}) => (
    <div className="main">
        <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}/>
        <Tasks tasks={tasks} hideDone={hideDone} toggleTaskDone={toggleTaskDone} removeTask={removeTask}/>
    </div>
);

export default List;