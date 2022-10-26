import IPainting from "@interfaces/IPainting";

import { PaintingsActionTypes, TPaintingsActions } from "../actions/paintings";

export interface IPaintingsState {
    paintings: IPainting[];
    isLoading: boolean;
    countItems: number;
    limitItems: number;
}

export const initPaintingsState: IPaintingsState = {
    paintings: [],
    isLoading: false,
    countItems: 1,
    limitItems: 1,
};

const paintingReducer = (
    state: IPaintingsState = initPaintingsState,
    action: TPaintingsActions,
): IPaintingsState => {
    switch (action.type) {
        case PaintingsActionTypes.PAINTINGS_SET_PAINTINGS:
            return {
                ...state,
                paintings: [...action.payload],
            };
        default:
            return state;
    }
};

export default paintingReducer;
