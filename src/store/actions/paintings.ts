import IPainting from "@interfaces/IPainting";

export enum PaintingsActionTypes {
    REQUEST_LOADING = "PAINTINGS/REQUEST_LOADING",
    REQUEST_SUCCESS = "PAINTINGS/REQUEST_SUCCESS",
    REQUEST_FAILURE = "PAINTINGS/REQUEST_FAILURE",
}

export interface RequestLoadingAction {
    type: PaintingsActionTypes.REQUEST_LOADING;
    payload: {
        page: number;
        limits: number;
        search: string;
    };
}

export interface RequestSuccessAction {
    type: PaintingsActionTypes.REQUEST_SUCCESS;
    payload: {
        paintings: IPainting[];
        countItems: number;
    };
}

export interface RequestFailureAction {
    type: PaintingsActionTypes.REQUEST_FAILURE;
    payload: string;
}

export type TPaintingsActions =
    | RequestSuccessAction
    | RequestFailureAction
    | RequestLoadingAction;
