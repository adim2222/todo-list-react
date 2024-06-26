import { GlobalStyles } from "./globalStyle";
import TasksPage from "./Routes/tasks/TasksPage";
import AuthorPage from "./Routes/author/Author";
import TaskPage from "./Routes/tasks/TaskPage";
import Navigation from "./Navigation";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <GlobalStyles />
        <Navigation />
        <Switch>
          <Route path="/tasks/:id"><TaskPage /></Route>
          <Route path="/tasks"><TasksPage /></Route>
          <Route path="/author"><AuthorPage /></Route>
          <Route path="/"><Redirect to="/tasks" /></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;