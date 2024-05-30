export const getExampleTasks = async () => {
    const res = await fetch("/todo-list-react/exampleTasks.json");

    if (!res.ok) {
        new Error(res.statusText)
    }

    return await res.json();
};