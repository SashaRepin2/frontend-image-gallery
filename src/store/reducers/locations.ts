import {
    LocationsActionTypes,
    LocationsActions,
} from "@store/actions/locations";

import ILocation from "@interfaces/ILocation";

export interface ILocationsState {
    locations: ILocation[];
    isLoading: boolean;
    search: string;
    countItems: number;
    limitItems: number;
    error: string | null;
}

export const initLocationsState: ILocationsState = {
    locations: [],
    isLoading: false,
    countItems: 1,
    limitItems: 1,
    error: null,
    search: "",
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
            const { locations, countItems, limitItems } = action.payload;

            return {
                ...state,
                locations: [...locations],
                countItems: countItems,
                limitItems: limitItems,
                isLoading: false,
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
