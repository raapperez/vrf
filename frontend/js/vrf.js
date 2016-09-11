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

var _vrfStore2 = _interopRequireDefault(_vrfStore);

var _spotippos = require('./spotippos');

var _spotippos2 = _interopRequireDefault(_spotippos);

var _realties = require('./pages/realties');

var _realties2 = _interopRequireDefault(_realties);

var _noPage = require('./pages/no-page');

var _noPage2 = _interopRequireDefault(_noPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '', component: _spotippos2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/anuncios', component: _realties2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/novo-anuncio', component: _noPage2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/anuncio/:id', component: _noPage2.default })
);

var serverSide = exports.serverSide = function serverSide(renderProps) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _vrfStore2.default },
        _react2.default.createElement(_reactRouter.RouterContext, renderProps)
    );
};

var clientSide = exports.clientSide = function clientSide(renderProps) {
    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _vrfStore2.default },
        _react2.default.createElement(_reactRouter.Router, renderProps)
    );
};