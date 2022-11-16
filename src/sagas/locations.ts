import { call, put, takeEvery } from "redux-saga/effects";

import {
    locationsReqFailureAction,
    locationsReqSuccessAction,
} from "@store/action-creators/locations";
import { LocationsActionTypes } from "@store/actions/locations";

import locatinsApi from "@api/locationsApi";

import ILocation from "@interfaces/ILocation";

export function* workerRequestAllLocations() {
    try {
        const locations: ILocation[] = yield call(locatinsApi.getAll);

        yield put(locationsReqSuccessAction(locations));
    } catch (e) {
        const { message } = e as Error;

        yield put(locationsReqFailureAction("Произошла ошибка!"));
    }
}

export function* watcherLocationsSaga() {
    yield takeEvery(
        LocationsActionTypes.REQUEST_LOADING,
        workerRequestAllLocations,
    );
}
