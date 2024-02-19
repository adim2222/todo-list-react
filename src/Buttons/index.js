import React from "react";
import {FunctionButtons, ListHeader, ButtonHide, ButtonComplete} from "./styled.js"

const Buttons = ({hideDone, tasks, toggleHideDone, toggleAllDone}) => (
    <FunctionButtons>
        <ListHeader>Lista zadań</ListHeader>
        <ButtonHide onClick={toggleHideDone}>{hideDone ? "Pokaż" : "Ukryj"} Ukończone</ButtonHide>
        <ButtonComplete disabled={tasks.every(({ done }) => done)} onClick={toggleAllDone}>Ukończ wszystkie</ButtonComplete>
    </FunctionButtons>
);

export default Buttons;