import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";
import { useTasks } from "./useTasks";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";

function App() {

  const { tasks } = useSelector(selectTasks);

  const {
    //tasks,
    hideDone,
    removeTask,
    toggleAllDone,
    toggleTaskDone,
    addTask,
    toggleHideDone,
  } = useTasks();

  return (
    <div className="App">
      <Header />
      <Section content={<Form addTask={addTask}/>} header={"Dodaj nowe zadanie"}/>
      <Section content={<List toggleAllDone={toggleAllDone} toggleTaskDone={toggleTaskDone} removeTask={removeTask} hideDone={hideDone} toggleHideDone={toggleHideDone} tasks={tasks}/>} header={""}/>
    </div>
  );
}

export default App;