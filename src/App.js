import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";
import { GlobalStyles } from "./globalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Section content={<Form />} header={"Dodaj nowe zadanie"}/>
      <Section content={<List />}/>
    </div>
  );
}

export default App;