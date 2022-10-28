import { AuthorsActionTypes, AuthorsActions } from "@store/actions/authors";

import IAuthor from "@interfaces/IAuthor";

export interface IAuthorsState {
    authors: IAuthor[];
    isLoading: boolean;
    countItems: number;
    limitItems: number;
}

export const initAuthorsState: IAuthorsState = {
    authors: [],
    isLoading: false,
    countItems: 1,
    limitItems: 1,
};

const authorsReducer = (
    state: IAuthorsState = initAuthorsState,
    action: AuthorsActions,
): IAuthorsState => {
    switch (action.type) {
        case AuthorsActionTypes.REQUEST_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
};

export default authorsReducer;
