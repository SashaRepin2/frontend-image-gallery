import { put, takeEvery } from "redux-saga/effects";

import {
    LocationsActionTypes,
    RequestLoadingAction,
} from "@store/actions/locations";

import locatinsApi from "@api/locationsApi";

import ILocation from "@interfaces/ILocation";

export function* workerRequestPaintings(action: RequestLoadingAction) {
    try {
        const { page, limits, search } = action.payload;

        const locations: ILocation[] = yield locatinsApi.getAll();

        yield put({
            type: LocationsActionTypes.REQUEST_SUCCESS,
            payload: {
                locations: locations,
            },
        });
    } catch (e) {
        const { message } = e as Error;
        console.log(message);

        yield put({
            type: LocationsActionTypes.REQUEST_FAILURE,
            payload: "Произошла ошибка!",
        });
    }
}

export function* watchLoadDataSaga() {
    yield takeEvery(
        LocationsActionTypes.REQUEST_LOADING,
        workerRequestPaintings,
    );
}
