import { put, takeEvery } from "redux-saga/effects";

import {
    AuthorsActionTypes,
    RequestLoadingAction,
} from "@store/actions/authors";

import authorsApi from "@api/authorsApi";

import IAuthor from "@interfaces/IAuthor";

export function* workerFetchPaintings(action: RequestLoadingAction) {
    try {
        const { page, limits, search } = action.payload;

        const authors: IAuthor[] = yield authorsApi.getAll();

        yield put({
            type: AuthorsActionTypes.REQUEST_SUCCESS,
            payload: {
                authors: authors,
            },
        });
    } catch (e) {
        const { message } = e as Error;
        console.log(message);

        yield put({
            type: AuthorsActionTypes.REQUEST_FAILURE,
            payload: "Произошла ошибка!",
        });
    }
}

export function* watchLoadDataSaga() {
    yield takeEvery(AuthorsActionTypes.REQUEST_LOADING, workerFetchPaintings);
}
