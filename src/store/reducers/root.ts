import { combineReducers } from "redux";

import paintingReducer from "./paintings";

const rootReducer = combineReducers({
    paintings: paintingReducer,
});

export default rootReducer;
