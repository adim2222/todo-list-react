import { useState } from "react";
import { AddTaskButton, InputDiv, TaskInput } from "../Form/styled";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Search = () => {
    const history = useHistory();
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("szukaj");

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    };

    return (
        <InputDiv>
            <TaskInput onChange={onInputChange}/>
        </InputDiv>
    );
};

export default Search;