import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const selectLocations = (state: RootState) => state.locations.locations;

export const selectLocationsForFilters = createSelector(
    [selectLocations],
    (locations) => {
        return locations.map((location) => {
            return {
                value: String(location.id),
                label: location.location,
            };
        });
    },
);
