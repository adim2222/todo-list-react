import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FunctionButtons, ListHeader, ButtonHide, ButtonComplete } from "./styled.js"
import { toggleHideDone, toggleAllDone, selectTasks } from "../tasksSlice.js";

const Buttons = () => {
    const {tasks , hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    return (
        <FunctionButtons>
            <ListHeader>Lista zadań</ListHeader>
            <ButtonHide onClick={() => dispatch(toggleHideDone())}>{hideDone ? "Pokaż" : "Ukryj"} Ukończone</ButtonHide>
            <ButtonComplete onClick={() => dispatch(toggleAllDone())} disabled={tasks.every(({ done }) => done)}>Ukończ wszystkie</ButtonComplete>
        </FunctionButtons>
    )
};

export default Buttons;