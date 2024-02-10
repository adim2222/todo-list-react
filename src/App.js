import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";
import { useEffect, useState } from "react";

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

function App() {

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(savedTasks);

  const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  useEffect(() => {
    saveTasks();
  }, [tasks]);

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