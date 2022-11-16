import IAuthor from "@interfaces/IAuthor";

export enum AuthorsActionTypes {
    REQUEST_LOADING = "AUTHORS/REQUEST",
    REQUEST_SUCCESS = "AUTHORS/REQUEST_SUCCESS",
    REQUEST_FAILURE = "AUTHORS/REQUEST_FAILURE",
}

export interface RequestLoadingAction {
    type: AuthorsActionTypes.REQUEST_LOADING;
}

export interface RequestSuccessAction {
    type: AuthorsActionTypes.REQUEST_SUCCESS;
    payload: {
        authors: IAuthor[];
    };
}

export interface RequestFailureAction {
    type: AuthorsActionTypes.REQUEST_FAILURE;
}

export type AuthorsActions =
    | RequestLoadingAction
    | RequestSuccessAction
    | RequestFailureAction;
