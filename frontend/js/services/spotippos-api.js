'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../constants');

var constants = _interopRequireWildcard(_constants);

var _http = require('./http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotipposApi = function () {
    function SpotipposApi(http) {
        _classCallCheck(this, SpotipposApi);

        this.host = constants.spotipposApiHost;
        this.http = http;
    }

    _createClass(SpotipposApi, [{
        key: 'get',
        value: function get(resource, id) {
            return this.http.get(this.host + '/' + resource + '/' + id);
        }
    }, {
        key: 'list',
        value: function list(resource, query) {
            return this.http.get(this.host + '/' + resource, query);
        }
    }]);

    return SpotipposApi;
}();

exports.default = SpotipposApi;