import { toast } from "react-toastify";
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

        yield put(
            locationsReqSuccessAction({
                locations,
            }),
        );
    } catch (e) {
        toast.error("Не удалось загрузить фильтры локаций", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        yield put(locationsReqFailureAction("Произошла ошибка!"));
    }
}

export function* watcherLocationsSaga() {
    yield takeEvery(
        LocationsActionTypes.REQUEST_LOADING,
        workerRequestAllLocations,
    );
}
