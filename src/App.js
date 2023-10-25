import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Section from "./Section";
import { useState } from "react";

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <div className="App">
      <Header />
      <Section content={<Form />} header={"Dodaj nowe zadanie:"}/>
      <Section content={<List hideDone={hideDone} toggleHideDone={toggleHideDone}/>} header={""}/>
    </div>
  );
}

export default App;