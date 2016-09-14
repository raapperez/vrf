'use strict';

export const SET_PROPERTIES = 'SET_PROPERTIES';
export const setProperties = properties => ({
    type: SET_PROPERTIES,
    properties
});

export const SET_FILTERED_PROPERTIES = 'SET_FILTERED_PROPERTIES';
export const setFilteredProperties = filteredProperties => ({
    type: SET_FILTERED_PROPERTIES,
    filteredProperties
});