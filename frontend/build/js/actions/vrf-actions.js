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

var SET_FILTERED_PROPERTIES = exports.SET_FILTERED_PROPERTIES = 'SET_FILTERED_PROPERTIES';
var setFilteredProperties = exports.setFilteredProperties = function setFilteredProperties(filteredProperties) {
    return {
        type: SET_FILTERED_PROPERTIES,
        filteredProperties: filteredProperties
    };
};

var SET_PROPERTY = exports.SET_PROPERTY = 'SET_PROPERTY';
var setProperty = exports.setProperty = function setProperty(property) {
    return {
        type: SET_PROPERTY,
        property: property
    };
};