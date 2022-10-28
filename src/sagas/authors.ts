import { put, takeEvery } from "redux-saga/effects";

import { AuthorsActionTypes } from "@store/actions/authors";

import authorsApi from "@api/authorsApi";

import IAuthor from "@interfaces/IAuthor";

export function* workerFetchPaintings() {
    const authors: IAuthor[] = yield authorsApi.getAll();

    yield put({
        type: AuthorsActionTypes.REQUEST_SUCCESS,
        payload: authors,
    });
}

export function* watchLoadDataSaga() {
    yield takeEvery(AuthorsActionTypes.REQUEST_LOADING, workerFetchPaintings);
}
