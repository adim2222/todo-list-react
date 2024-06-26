import { createSlice } from '@reduxjs/toolkit'
import { getTasksFromLocalStorage } from '../../tasksLocalStorage';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: getTasksFromLocalStorage(),
  reducers: {
    addTask: ({tasks}, {payload}) => {
      console.log(payload)
      if (payload.content.trim() === "") {
        return;
      } else {
        tasks.push(payload);
      }
    },
    removeTask: ({tasks}, action) => {
      tasks.splice(tasks.findIndex((task) => task.id === action.payload), 1);
    },
    toggleTaskDone: ({tasks}, action) => {
      const index = tasks.findIndex(task => task.id === action.payload);
      tasks[index].done = !tasks[index].done;
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleAllDone: state => {
      state.tasks.forEach(task => {
        task.done = true;
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, {payload: tasks}) => {
      state.tasks = tasks.tasks;
    }
  }
})

export const { addTask, removeTask, toggleHideDone, fetchExampleTasks, toggleAllDone, toggleTaskDone, setTasks } = tasksSlice.actions
export const selectTasks = state => state.tasks;
export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  const hideDone = tasks.hideDone;
  const unfilteredTasks = tasks.tasks;
  const filteredTasks = tasks.tasks.filter(({content}) => content.includes(query));
  if (!query || query.trim() === "") {
    return {
      tasks: unfilteredTasks,
      hideDone: hideDone
    };
  }
  return {
    tasks: filteredTasks,
    hideDone: hideDone
  };
}
export const selectTaskById = (state, taskId) => {
  const select = selectTasks(state).tasks.find(({ id }) => id === taskId);
  return select;
}

export default tasksSlice.reducer