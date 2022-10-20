import { FC, ReactNode, useReducer } from "react";

import AppContext, { IAction } from "@context/index";
import paintingReducer, {
    initPaintingsState,
} from "@context/reducers/paintings";

interface IAppProviderProps {
    children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
    const [state, _dispatch] = useReducer(paintingReducer, initPaintingsState);

    const dispatch = (action: IAction<any>) => {
        if (action instanceof Function) {
            action(_dispatch);
        } else {
            _dispatch(action);
        }
    };

    return (
        <AppContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
