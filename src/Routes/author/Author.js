import Section from "../tasks/Section"
import { AboutMe } from "./styled";

const Author = () => {
    return (
        <>
            <Section header={"O autorze:"} content={
                <AboutMe>
                    Cześć!
                </AboutMe>
            } />
        </>
    );
};

export default Author;