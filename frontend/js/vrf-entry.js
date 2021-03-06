'use strict';

require('core-js');

require('whatwg-fetch');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _vrf = require('./vrf');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render((0, _vrf.clientSide)({ history: _reactRouter.browserHistory, children: _vrf.routes }), document.getElementById('entry-point'));