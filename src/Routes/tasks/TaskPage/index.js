import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Section from "../Section";
import { selectTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";

const TaskPage = () => {
    const params = useParams();
    const task = useSelector(state => selectTaskById(state, params.id))
    console.log(params.id);
    return (
        <>
            <Section header={params.id} content={task.content}/>
        </>
    )
}

export default TaskPage;