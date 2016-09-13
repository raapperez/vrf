'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clientSide = exports.serverSide = exports.routes = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRedux = require('react-redux');

var _vrfStore = require('./stores/vrf-store');

var _spotippos = require('./spotippos');

var _spotippos2 = _interopRequireDefault(_spotippos);

var _advertisings = require('./pages/advertisings');

var _advertisings2 = _interopRequireDefault(_advertisings);

var _noPage = require('./pages/no-page');

var _noPage2 = _interopRequireDefault(_noPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '', component: _spotippos2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/anuncios', component: _advertisings2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/novo-anuncio', component: _noPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/anuncio/:id', component: _noPage2.default }),
    _react2.default.createElement(_reactRouter.Redirect, { from: '*', to: '/anuncios' })
);

var serverSide = exports.serverSide = function serverSide(renderProps, initialState) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: (0, _vrfStore.getStore)(initialState) },
        _react2.default.createElement(_reactRouter.RouterContext, renderProps)
    );
};

var clientSide = exports.clientSide = function clientSide(renderProps) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: (0, _vrfStore.getStore)(window.__PRELOADED_STATE__) },
        _react2.default.createElement(_reactRouter.Router, renderProps)
    );
};