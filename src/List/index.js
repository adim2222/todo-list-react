import React from "react";

import Tasks from "../Tasks";
import Buttons from "../Buttons";
import { MainDiv } from "./styled";
  
const List = () => (
    <MainDiv>
        <Buttons />
        <Tasks/>
    </MainDiv>
);

export default List;