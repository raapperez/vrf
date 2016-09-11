'use strict';

export const SET_PROPERTIES = 'SET_PROPERTIES';
export const setProperties = properties => ({
    type: SET_PROPERTIES,
    properties
});