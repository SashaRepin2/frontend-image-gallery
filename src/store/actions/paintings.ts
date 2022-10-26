import IPainting from "@interfaces/IPainting";

export enum PaintingsActionTypes {
    PAINTINGS_LOAD_PAINTINGS = "PAINTINGS/LOAD_PAINTINGS",
    PAINTINGS_SET_PAINTINGS = "PAINTINGS/UPDATE_PAINTINGS",
}

export interface SetPaintingsAction {
    payload: IPainting[];
    type: PaintingsActionTypes.PAINTINGS_SET_PAINTINGS;
}

export interface LoadPaintingsAction {
    type: PaintingsActionTypes.PAINTINGS_LOAD_PAINTINGS;
}

export type TPaintingsActions = SetPaintingsAction | LoadPaintingsAction;
