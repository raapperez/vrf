'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var SET_PROPERTIES = exports.SET_PROPERTIES = 'SET_PROPERTIES';
var setProperties = exports.setProperties = function setProperties(properties) {
    return {
        type: SET_PROPERTIES,
        properties: properties
    };
};