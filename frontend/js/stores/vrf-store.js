'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _vrfActions = require('../actions/vrf-actions');

var actions = _interopRequireWildcard(_vrfActions);

var _reduxForm = require('redux-form');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var properties = function properties() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case actions.SET_PROPERTIES:
            return action.properties;
        default:
            return state;
    }
};

var combinedReducers = (0, _redux.combineReducers)({
    properties: properties,
    form: _reduxForm.reducer
});

var rootReducer = function rootReducer(state, action) {
    return combinedReducers(state, action);
};
var store = (0, _redux.createStore)(rootReducer);

exports.default = store;