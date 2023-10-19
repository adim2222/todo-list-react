import React from "react";
import "./style.css";

import Tasks from "../Tasks";
import Buttons from "../Buttons";

const tasks = [
    {id: 1, content: "asdf", done: false},
    {id: 2, content: "asfsa", done: true},
    {id: 3, content: "asgfdsggf", done: false},
];
  
const hideDone = false;

const List = () => (
    <div className="main">
        <Buttons tasks={tasks} hideDone={hideDone}/>
        <Tasks tasks={tasks} hideDone={hideDone}/>
    </div>
);

export default List;