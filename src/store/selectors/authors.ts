import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const selectAuthors = (state: RootState) => state.authors.authors;

export const selectAuthorsForFilters = createSelector(
    [selectAuthors],
    (authors) => {
        return authors.map((author) => {
            return {
                value: String(author.id),
                label: author.name,
            };
        });
    },
);
