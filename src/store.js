import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./Routes/tasks/tasksSlice";
import createSagaMiddleware from "redux-saga";
import { tasksSaga } from "./Routes/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(tasksSaga);

export default store;