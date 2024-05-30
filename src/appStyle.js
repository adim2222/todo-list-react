import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationTab = styled.nav`
    background-color: teal;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const StyledLink = styled(Link)`
    background-color: white;
    color: black;
    padding: 10px;
    text-decoration: none;
`