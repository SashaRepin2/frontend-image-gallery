import { put, takeEvery } from "redux-saga/effects";

import { LocationsActionTypes } from "@store/actions/locations";

import locatinsApi from "@api/locationsApi";

import ILocation from "@interfaces/ILocation";

export function* workerFetchPaintings() {
    const data: ILocation[] = yield locatinsApi.getAll();

    yield put({
        type: LocationsActionTypes.REQUEST_SUCCESS,
        payload: data,
    });
}

export function* watchLoadDataSaga() {
    yield takeEvery(LocationsActionTypes.REQUEST_LOADING, workerFetchPaintings);
}
