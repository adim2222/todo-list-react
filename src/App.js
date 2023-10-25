import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";
import { useState } from "react";

function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    {id: 1, content: "asdf", done: false},
    {id: 2, content: "asfsa", done: true},
    {id: 3, content: "asgfdsggf", done: false},
  ]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done: !task.done};
      };

      return task;
    }));
  };

  return (
    <div className="App">
      <Header />
      <Section content={<Form />} header={"Dodaj nowe zadanie:"}/>
      <Section content={<List toggleTaskDone={toggleTaskDone} removeTask={removeTask} hideDone={hideDone} toggleHideDone={toggleHideDone} tasks={tasks}/>} header={""}/>
    </div>
  );
}

export default App;