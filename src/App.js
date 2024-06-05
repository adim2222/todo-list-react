import { GlobalStyles } from "./globalStyle";
import TasksPage from "./Routes/tasks/TasksPage";
import AuthorPage from "./Routes/author/Author";
import Navigation from "./Navigation";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <GlobalStyles />
        <Navigation />
        <Switch>
          <Route path="/tasks"><TasksPage /></Route>
          <Route path="/author"><AuthorPage /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;