import { toast } from "react-toastify";
import { call, put, takeEvery } from "redux-saga/effects";

import {
    authorsReqFailureAction,
    authorsReqSuccessAction,
} from "@store/action-creators/authors";
import { AuthorsActionTypes } from "@store/actions/authors";

import authorsApi from "@api/authorsApi";

import IAuthor from "@interfaces/IAuthor";

export function* workerRequestAllAuthors() {
    try {
        const authors: IAuthor[] = yield call(authorsApi.getAll);

        yield put(
            authorsReqSuccessAction({
                authors,
            }),
        );
    } catch (e) {
        toast.error("Не удалось загрузить фильтры авторов", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        yield put(authorsReqFailureAction("Произошла ошибка!"));
    }
}

export function* watcherAuthorsSaga() {
    yield takeEvery(
        AuthorsActionTypes.REQUEST_LOADING,
        workerRequestAllAuthors,
    );
}
