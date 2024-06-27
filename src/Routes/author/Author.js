import Section from "../tasks/Section"
import { AboutMe } from "./styled";

const Author = () => {
    return (
        <>
            <Section header={"O autorze:"} content={
                <AboutMe>
                    Cześć! Jestem Adam aktualnie zaczynam swoją przygodę z programowaniem w technikum i piszę tą stronę na kurs YouCode.
                </AboutMe>
            } />
        </>
    );
};

export default Author;