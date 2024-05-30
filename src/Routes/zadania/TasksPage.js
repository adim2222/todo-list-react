import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Search from "./Search";
import Section from "./Section";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../../tasksSlice";
import { DownloadButton } from "./styled";

function Tasks() {
  const dispatch = useDispatch()
  return (
    <div>
      <Header />
      <Section content={<Form />} header={<>
        Dodaj nowe zadanie
        <DownloadButton onClick={() => dispatch(fetchExampleTasks())}>Pobierz przykładowe zadania</DownloadButton>
      </>}/>
      <Section content={<Search/>} header={"Szukaj zadań"}/>
      <Section content={<List />}/>
    </div>
  );
}

export default Tasks;