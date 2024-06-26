import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationTab = styled.nav`
    background-color: teal;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`

export const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover {
        font-weight: bold;
    };
`