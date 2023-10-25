import React from "react";
import "./style.css";

import Tasks from "../Tasks";
import Buttons from "../Buttons";
  
const List = ({hideDone, toggleHideDone, tasks, removeTask, toggleTaskDone, toggleAllDone}) => (
    <div className="main">
        <Buttons tasks={tasks} hideDone={hideDone} toggleAllDone={toggleAllDone} toggleHideDone={toggleHideDone}/>
        <Tasks tasks={tasks} hideDone={hideDone} toggleTaskDone={toggleTaskDone} removeTask={removeTask}/>
    </div>
);

export default List;