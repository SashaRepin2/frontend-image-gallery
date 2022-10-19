import { FC, ReactNode, useReducer } from "react";

import AppContext from "@context/index";
import paintingReducer, {
    initPaintingsState,
} from "@context/reducers/paintings";

interface IAppProviderProps {
    children: ReactNode;
}

const AppProvider: FC<IAppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(paintingReducer, initPaintingsState);

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
