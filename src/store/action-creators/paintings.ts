import createAction from "@utils/createAction";

import { PaintingsActionTypes } from "@store/actions/paintings";
import { TPaintingsFilters } from "@store/reducers/paintings";

import IPainting from "@interfaces/IPainting";

export const paintingsReqLoadingAction = createAction<{
    page: number;
    limits: number;
    filters: TPaintingsFilters;
}>(PaintingsActionTypes.REQUEST_LOADING);

export const paintingsReqSuccessAction = createAction<{
    paintings: IPainting[];
    countItems: number;
}>(PaintingsActionTypes.REQUEST_SUCCESS);

export const paintingsReqFailureAction = createAction<string>(
    PaintingsActionTypes.REQUEST_FAILURE,
);
