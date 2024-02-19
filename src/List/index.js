import React from "react";

import Tasks from "../Tasks";
import Buttons from "../Buttons";
import { MainDiv } from "./styled";
  
const List = ({hideDone, toggleHideDone, tasks, removeTask, toggleTaskDone, toggleAllDone}) => (
    <MainDiv>
        <Buttons tasks={tasks} hideDone={hideDone} toggleAllDone={toggleAllDone} toggleHideDone={toggleHideDone}/>
        <Tasks tasks={tasks} hideDone={hideDone} toggleTaskDone={toggleTaskDone} removeTask={removeTask}/>
    </MainDiv>
);

export default List;