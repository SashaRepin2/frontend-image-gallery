import React, { createContext } from "react";

import { IPaintingsState, initPaintingsState } from "./reducers/paintings";

export interface IAction<TPayload> {
    payload: TPayload;
    type: string;
}

export const createAction =
    <TPayload>(type: string): ((payload: TPayload) => IAction<TPayload>) =>
    (payload: TPayload): IAction<TPayload> => ({
        payload,
        type,
    });

const AppContext = createContext<{
    state: IPaintingsState;
    dispatch: React.Dispatch<{ type: string; payload: any }>;
}>({
    state: initPaintingsState,
    dispatch: () => undefined,
});

export default AppContext;
