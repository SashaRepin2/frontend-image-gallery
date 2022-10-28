import IPainting from "@interfaces/IPainting";

import { PaintingsActionTypes, TPaintingsActions } from "../actions/paintings";

export interface IPaintingsState {
    paintings: IPainting[];
    isLoading: boolean;
    search: string;
    countItems: number;
    limitItems: number;
    error: string | null;
}

export const initPaintingsState: IPaintingsState = {
    paintings: [],
    isLoading: true,
    countItems: 1,
    limitItems: 10,
    search: "",
    error: null,
};

const paintingReducer = (
    state: IPaintingsState = initPaintingsState,
    action: TPaintingsActions,
): IPaintingsState => {
    switch (action.type) {
        case PaintingsActionTypes.REQUEST_LOADING: {
            const { limits, search } = action.payload;

            return {
                ...state,
                limitItems: limits,
                search: search,
                isLoading: true,
            };
        }
        case PaintingsActionTypes.REQUEST_SUCCESS:
            return {
                ...state,
                paintings: [...action.payload.paintings],
                countItems: action.payload.countItems,
                isLoading: false,
                error: null,
            };
        case PaintingsActionTypes.REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default paintingReducer;
