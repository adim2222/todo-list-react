import React from "react";
import "./style.css"

import Tasks from "../Tasks"

const tasks = [
    {id: 1, content: "asdf", done: false},
    {id: 2, content: "asfsa", done: true},
    {id: 3, content: "asgfdsggf", done: false},
];
  
const hideDoneTasks = false;

const List = () => (
    <div className="main">
        <div className="js-buttons-div function__buttons"></div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks}/>
    </div>
);

export default List;