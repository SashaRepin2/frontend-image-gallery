import createAction from "@utils/createAction";

import { AuthorsActionTypes } from "@store/actions/authors";

import IAuthor from "@interfaces/IAuthor";

export const authorsReqLoadingAction = createAction(
    AuthorsActionTypes.REQUEST_LOADING,
);

export const authorsReqSuccessAction = createAction<{ authors: IAuthor[] }>(
    AuthorsActionTypes.REQUEST_SUCCESS,
);

export const authorsReqFailureAction = createAction<string>(
    AuthorsActionTypes.REQUEST_FAILURE,
);
