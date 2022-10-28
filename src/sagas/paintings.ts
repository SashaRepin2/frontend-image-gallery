import { put, takeEvery } from "redux-saga/effects";

import {
    PaintingsActionTypes,
    RequestLoadingAction,
} from "@store/actions/paintings";

import paintingsApi, { IGetAllPaitingsResponse } from "@api/paintingsApi";

export function* workerRequestPaintings(action: RequestLoadingAction) {
    try {
        const { page, limits, search } = action.payload;

        const { data, count }: IGetAllPaitingsResponse =
            yield paintingsApi.getAll(page, limits, search);

        yield put({
            type: PaintingsActionTypes.REQUEST_SUCCESS,
            payload: {
                paintings: data,
                countItems: count,
            },
        });
    } catch (e) {
        const { message } = e as Error;
        console.log(message);

        yield put({
            type: PaintingsActionTypes.REQUEST_FAILURE,
            payload: "Произошла ошибка!",
        });
    }
}

export function* watcherRequestData() {
    yield takeEvery(
        PaintingsActionTypes.REQUEST_LOADING,
        workerRequestPaintings,
    );
}
