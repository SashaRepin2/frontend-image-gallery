import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    paintingsReqFailureAction,
    paintingsReqSuccessAction,
} from "@store/action-creators/paintings";
import {
    PaintingsActionTypes,
    RequestLoadingAction,
} from "@store/actions/paintings";

import paintingsApi from "@api/paintingsApi";

export function* workerRequestPaintings(action: RequestLoadingAction) {
    try {
        const { page, limits, filters } = action.payload;

        const { data, count } = yield call(
            paintingsApi.getAll,
            page + 1,
            limits,
            filters,
        );

        yield put(
            paintingsReqSuccessAction({
                paintings: data,
                countItems: count,
            }),
        );
    } catch (e) {
        yield put(paintingsReqFailureAction("Произошла ошибка!"));
    }
}

export function* watcherPaintingsData() {
    yield takeEvery(
        PaintingsActionTypes.REQUEST_LOADING,
        workerRequestPaintings,
    );
}
