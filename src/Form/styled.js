import styled from "styled-components";

export const InputDiv = styled.div`
    padding: 20px;
    display: flex;
`

export const AddTaskButton = styled.button`
    margin-left: 20px;
    background-color: teal;
    color: rgb(255, 255, 255);
    border: none;
    width: 150px;
    font-size: 16px;
    transition: 0.3s;
    &:hover {
        transform: scale(1.2);
        background-color: rgb(0, 163, 163);
    }
`

export const TaskInput = styled.input`
    flex-grow: 2;
    height: 30px;
    font-size: 28px;
`