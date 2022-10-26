import { fork, put, takeEvery } from "redux-saga/effects";

import { PaintingsActionTypes } from "@store/actions/paintings";

import paintingsApi, { IGetAllPaitingsResponse } from "@api/paintingsApi";

function* worker() {
    const data: IGetAllPaitingsResponse = yield fork(paintingsApi.getAll);

    yield put({
        type: PaintingsActionTypes.PAINTINGS_SET_PAINTINGS,
        payload: data,
    });
}

function* watchClickSaga() {
    yield takeEvery(PaintingsActionTypes.PAINTINGS_LOAD_PAINTINGS, worker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
