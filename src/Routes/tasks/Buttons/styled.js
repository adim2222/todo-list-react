import { styled, css } from "styled-components"

export const FunctionButtons = styled.div`
    background-color: white;
    margin-top: 20px;
    text-align: end;
    padding: 20px;
    border-bottom: solid 1px lightgray;
    @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
    }
`

export const ListHeader = styled.span`
    float: left;
    font-size: 22px;
    @media (max-width: 500px) {
        text-align: center;
    }
`

export const ButtonHide = styled.button`
    background-color: white;
    color: teal;
    border: none;
    transition: 0.3s;
    font-size: 20px;
    &:hover {
        color: black;
    }
`

export const ButtonComplete = styled.button`
    background-color: white;
    color: teal;
    border: none;
    transition: 0.3s;
    font-size: 20px;
    &:hover {
        color: black;
    }
    &:disabled {
        color: gray;
    }
`