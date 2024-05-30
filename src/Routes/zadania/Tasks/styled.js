import styled, { css } from "styled-components";

export const ListItem = styled.li`
    color: black;
    font-size: 22px;
    background-color: white;
    padding: 6px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`

export const TaskName = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`

export const TaskButton = styled.button`
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: white;
    border: none;

    ${({ remove }) => remove && css`
        background-color: red;
        color: white;
        margin-left: auto;
        transition: 0.3s;
        order: 4;

        &:hover {
            background-color: crimson;
        }
    `}

    ${({ done }) => done && css`
        background-color: green;
        margin-right: 10px;
        transition: 0.3s;
        order: -1;

        &:hover {
            background-color: #109010;;
        }
    `}
`

export const List = styled.ul`
    background-color: white;
    list-style-type: none;
    margin: 0px;
    padding: 20px;
`