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
        case AuthorsActionTypes.REQUEST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                authors: [...action.payload.authors],
            };
        }
        case AuthorsActionTypes.REQUEST_FAILURE: {
            return {
                ...state,
                isLoading: false,
            };
        }
        default:
            return state;
    }
};

export default authorsReducer;
