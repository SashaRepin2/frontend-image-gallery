import { all, fork } from "redux-saga/effects";

import { watcherAuthorsSaga } from "./authors";
import { watcherLocationsSaga } from "./locations";
import { watcherPaintingsData } from "./paintings";

export default function* rootSaga() {
    yield all([
        fork(watcherPaintingsData),
        fork(watcherLocationsSaga),
        fork(watcherAuthorsSaga),
    ]);
}
