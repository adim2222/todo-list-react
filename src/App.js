import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

function App() {

  const { tasks } = useSelector(selectTasks);

  return (
    <div className="App">
      <Header />
      <Section content={<Form />} header={"Dodaj nowe zadanie"}/>
      <Section content={<List />}/>
    </div>
  );
}

export default App;