import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({tasks}, {payload}) => {
      tasks.push(payload)
    },
    removeTask: ({tasks}, {index}) => {
      tasks.splice(index, 1);
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
  }
})

export const { addTask, removeTask, toggleHideDone, toggleAllDone, toggleTaskDone } = tasksSlice.actions
export const selectTasks = state => state.tasks
export default tasksSlice.reducer