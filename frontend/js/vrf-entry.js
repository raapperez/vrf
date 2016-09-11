'use strict';

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _vrf = require('./vrf');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('core-js');

_reactDom2.default.render((0, _vrf.clientSide)({ history: _reactRouter.browserHistory, children: _vrf.routes }), document.getElementById('entry-point'));