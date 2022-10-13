import IPainting from "@interfaces/IPainting";

import { PAINTINGS_ADD_PAINTING, PAINTINGS_ADD_PAINTINGS } from "../actions/paintings";

export interface IPaintingsState {
    paintings: IPainting[];
    loading: boolean;
}

export const initPaintingsState: IPaintingsState = {
    paintings: [],
    loading: false,
};

const paintingReducer = (
    state: IPaintingsState,
    action: { type: string; payload: any },
): IPaintingsState => {
    switch (action.type) {
        case PAINTINGS_ADD_PAINTINGS:
            return {
                ...state,
                paintings: [...state.paintings, ...action.payload],
            };

        case PAINTINGS_ADD_PAINTING:
            return {
                ...state,
                paintings: [...state.paintings, action.payload],
            };

        default:
            return state;
    }
};

export default paintingReducer;
