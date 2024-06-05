import styled from "styled-components"

export const DownloadButton = styled.button`
    margin-left: 20px;
    background-color: teal;
    color: rgb(255, 255, 255);
    border: none;
    font-size: 16px;
    transition: 0.3s;
    padding: 3px;
    float: right;
    &:hover {
        transform: scale(1.2);
        background-color: rgb(0, 163, 163);
    }
`