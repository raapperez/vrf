'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _realties = require('./pages/realties');

var _realties2 = _interopRequireDefault(_realties);

var _reactRedux = require('react-redux');

var _vrfStore = require('./stores/vrf-store');

var _vrfStore2 = _interopRequireDefault(_vrfStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '', component: function component(_ref) {
            var children = _ref.children;
            return children;
        } },
    _react2.default.createElement(_reactRouter.Route, { path: '/anuncios', component: _realties2.default }),
    _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/anuncios' })
);

exports.default = function (renderProps) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _vrfStore2.default },
        _react2.default.createElement(_reactRouter.Router, renderProps)
    );
};