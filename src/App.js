import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section content={<Form />} header={"Dodaj nowe zadanie:"}/>
      <Section content={<List />} header={""}/>
    </div>
  );
}

export default App;
