import { IPaintingsState } from "@context/reducers/paintings";

import IPainting from "@interfaces/IPainting";

export const PAINTINGS_ADD_PAINTING = "PAINTINGS/ADD_ADD_PAINTING";
export const PAINTINGS_ADD_PAINTINGS = "PAINTINGS/ADD_ADD_PAINTINGS";
export const PAINTINGS_UPDATE = "PAINTINGS/UPDATE";

type TAction<TPayload> = { type: string; payload: TPayload };

export function createAction<TPayload>(
    type: string,
): (payload: TPayload) => TAction<TPayload> {
    return (payload: TPayload) => ({
        type,
        payload,
    });
}

export const paintingsAddPaintings = createAction<IPainting[]>(
    PAINTINGS_ADD_PAINTINGS,
);
export const paintingsAddPainting = createAction<IPainting>(
    PAINTINGS_ADD_PAINTING,
);
export const paintingsUpdate = createAction<IPaintingsState>(PAINTINGS_UPDATE);

export type PaintingsActions =
    | ReturnType<typeof paintingsAddPaintings>
    | ReturnType<typeof paintingsAddPainting>
    | ReturnType<typeof paintingsUpdate>;
