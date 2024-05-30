import styled, { css } from "styled-components";

export const SectionDiv = styled.div`
    margin: auto;
    margin-top: 20px;
    max-width: 800px;
    background-color: white;
`

export const FormHeader = styled.div`    
    font-weight: bold;
    font-size: 22px;
    padding: 20px;
    border-bottom: solid 1px lightgray;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`