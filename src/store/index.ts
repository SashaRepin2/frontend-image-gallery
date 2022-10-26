import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import logger from "./middleware/logger";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
