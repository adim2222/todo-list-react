import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyle";
import TasksPage from "./Routes/zadania/TasksPage";
import AuthorPage from "./Routes/author/Author";
import { NavigationTab, StyledLink } from "./appStyle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyles />
        <NavigationTab>
              <StyledLink to="/zadania">Zadania</StyledLink>
              <StyledLink to="/author">O autorze</StyledLink>
        </NavigationTab>
        <Switch>
          <Route path="/zadania"><TasksPage /></Route>
          <Route path="/author"><AuthorPage /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;