import ILocation from "@interfaces/ILocation";

export enum LocationsActionTypes {
    REQUEST_LOADING = "LOCATIONS/REQUEST_LOADING",
    REQUEST_SUCCESS = "LOCATIONS/REQUEST_SUCCESS",
    REQUEST_FAILURE = "LOCATIONS/REQUEST_FAILURE",
}

export interface RequestLoadingAction {
    type: LocationsActionTypes.REQUEST_LOADING;
    payload: {
        page: number;
        limits: number;
        search: string;
    };
}

export interface RequestSuccessAction {
    type: LocationsActionTypes.REQUEST_SUCCESS;
    payload: {
        locations: ILocation[];
        countItems: number;
        limitItems: number;
    };
}

export interface RequestFailureAction {
    type: LocationsActionTypes.REQUEST_FAILURE;
    payload: string;
}

export type LocationsActions =
    | RequestSuccessAction
    | RequestFailureAction
    | RequestLoadingAction;
