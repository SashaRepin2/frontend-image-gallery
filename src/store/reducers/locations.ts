import {
    LocationsActionTypes,
    LocationsActions,
} from "@store/actions/locations";

import ILocation from "@interfaces/ILocation";

export interface ILocationsState {
    locations: ILocation[];
    isLoading: boolean;
}

export const initLocationsState: ILocationsState = {
    locations: [],
    isLoading: false,
};

const locationsReducer = (
    state: ILocationsState = initLocationsState,
    action: LocationsActions,
): ILocationsState => {
    switch (action.type) {
        case LocationsActionTypes.REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case LocationsActionTypes.REQUEST_SUCCESS: {
            const { locations } = action.payload;
            console.log(locations);

            return {
                ...state,
                isLoading: false,
                locations: [...locations],
            };
        }
        case LocationsActionTypes.REQUEST_FAILURE:
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
