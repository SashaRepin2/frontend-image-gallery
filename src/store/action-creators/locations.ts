import createAction from "@utils/createAction";

import "@store/actions/authors";
import { LocationsActionTypes } from "@store/actions/locations";

import ILocation from "@interfaces/ILocation";

export const locationsReqLoadingAction = createAction(
    LocationsActionTypes.REQUEST_LOADING,
);

export const locationsReqSuccessAction = createAction<{
    locations: ILocation[];
}>(LocationsActionTypes.REQUEST_SUCCESS);

export const locationsReqFailureAction = createAction<string>(
    LocationsActionTypes.REQUEST_FAILURE,
);
