import { combineReducers } from "redux";

import authorsReducer from "./authors";
import locationsReducer from "./locations";
import paintingReducer from "./paintings";

const rootReducer = combineReducers({
    paintings: paintingReducer,
    locations: locationsReducer,
    authors: authorsReducer,
});

export default rootReducer;
