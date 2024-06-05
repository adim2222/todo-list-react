import { NavigationTab, StyledLink } from "./NavigationStyle";

const Navigation = () => {
    return (
        <NavigationTab>
            <StyledLink to="/tasks">Zadania</StyledLink>
            <StyledLink to="/author">O autorze</StyledLink>
        </NavigationTab>
    );
}

export default Navigation;