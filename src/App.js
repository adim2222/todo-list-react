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

  const toggleAllDone = () => {
    setTasks(tasks.map(task => ({...task, done: true})));
    console.log("cock")
  };

  const addTask = (newTaskContent) => {
    setTasks(tasks => [...tasks, {content: newTaskContent, done: false, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1}])
  }

  return (
    <div className="App">
      <Header />
      <Section content={<Form addTask={addTask}/>} header={"Dodaj nowe zadanie"}/>
      <Section content={<List toggleAllDone={toggleAllDone} toggleTaskDone={toggleTaskDone} removeTask={removeTask} hideDone={hideDone} toggleHideDone={toggleHideDone} tasks={tasks}/>} header={""}/>
    </div>
  );
}

export default App;