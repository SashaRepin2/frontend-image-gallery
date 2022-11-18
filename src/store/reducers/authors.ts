import { AuthorsActionTypes, AuthorsActions } from "@store/actions/authors";

import IAuthor from "@interfaces/IAuthor";

export interface IAuthorsState {
    authors: IAuthor[];
    isLoading: boolean;
}

export const initAuthorsState: IAuthorsState = {
    authors: [],
    isLoading: false,
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
            const { authors } = action.payload;
            return {
                ...state,
                isLoading: false,
                authors: [...authors],
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
