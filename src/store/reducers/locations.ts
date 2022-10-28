import {
    LocationsActionTypes,
    LocationsActions,
} from "@store/actions/locations";

import ILocation from "@interfaces/ILocation";

export interface ILocationsState {
    locations: ILocation[];
    isLoading: boolean;
    countItems: number;
    limitItems: number;
}

export const initLocationsState: ILocationsState = {
    locations: [],
    isLoading: false,
    countItems: 1,
    limitItems: 1,
};

const locationsReducer = (
    state: ILocationsState = initLocationsState,
    action: LocationsActions,
): ILocationsState => {
    switch (action.type) {
        case LocationsActionTypes.REQUEST_SUCCESS:
            return {
                ...state,
                locations: [...action.payload.locations],
                countItems: action.payload.countItems,
                limitItems: action.payload.limitItems,
                isLoading: false,
            };
        case LocationsActionTypes.REQUEST_FAIL:
            return {
                ...state,
                locations: [],
                isLoading: false,
            };
        default:
            return state;
    }
};

export default locationsReducer;
