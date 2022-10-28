import ILocation from "@interfaces/ILocation";

export enum LocationsActionTypes {
    REQUEST_LOADING = "LOCATIONS/REQUEST_LOADING",
    REQUEST_SUCCESS = "LOCATIONS/REQUEST_SUCCESS",
    REQUEST_FAIL = "LOCATIONS/REQUEST_FAIL",
    SET_PAINTINGS = "LOCATIONS/SET_LOCATIONS",
    LOCATIONS_UPDATE = "LOCATIONS/UPDATE",
}

export interface RequestLoadingAction {
    type: LocationsActionTypes.REQUEST_LOADING;
}

export interface RequestSuccessAction {
    type: LocationsActionTypes.REQUEST_SUCCESS;
    payload: {
        locations: ILocation[];
        countItems: number;
        limitItems: number;
    };
}

export interface RequestFailAction {
    type: LocationsActionTypes.REQUEST_FAIL;
}

export interface SetLocationsAction {
    payload: ILocation[];
    type: LocationsActionTypes.SET_PAINTINGS;
}

export interface UpdateLocationsAction {
    type: LocationsActionTypes.LOCATIONS_UPDATE;
}

export type LocationsActions =
    | RequestSuccessAction
    | RequestFailAction
    | RequestLoadingAction
    | SetLocationsAction
    | UpdateLocationsAction;
