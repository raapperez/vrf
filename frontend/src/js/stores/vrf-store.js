'use strict';

import {createStore, combineReducers} from 'redux';
import * as actions from '../actions/vrf-actions';
import {reducer as formReducer} from 'redux-form';

const properties = (state = [], action) => {
    switch (action.type) {
        case actions.SET_PROPERTIES:
            return action.properties;
        default:
            return state;
    }
};

const combinedReducers = combineReducers({
    properties,
    form: formReducer
});

const rootReducer = (state, action) => combinedReducers(state, action);

export const getStore = (initialState) => {
    return createStore(rootReducer, initialState);
};