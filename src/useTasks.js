import { useState, useEffect } from "react";

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

export const useTasks = () => {

    const [tasks, setTasks] = useState(savedTasks);
    const [hideDone, setHideDone] = useState(false);

    const saveTasks = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    useEffect(() => {
        saveTasks();
    }, [tasks]);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            };

            return task;
        }));
    };

    const toggleAllDone = () => {
        setTasks(tasks.map(task => ({ ...task, done: true })));
    };

    const addTask = (newTaskContent) => {
        setTasks(tasks => [...tasks, { content: newTaskContent, done: false, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1 }])
    }

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    return {
        toggleAllDone,
        toggleHideDone,
        toggleTaskDone,
        addTask,
        removeTask,
        tasks,
        hideDone
    }
};