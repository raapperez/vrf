'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var status = function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return response.json().catch(function (err) {
            return Promise.reject(response);
        }).then(function (response) {
            return Promise.reject(response);
        });
    }
};

var json = function json(response) {
    return response.json().catch(function () {
        return null;
    });
};

var Http = function () {
    function Http() {
        _classCallCheck(this, Http);
    }

    _createClass(Http, [{
        key: 'get',
        value: function get(path) {
            var query = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];


            var queryString = Object.entries(query).map(function (entry) {

                if (entry[1] instanceof Array) {
                    return entry[1].map(function (v) {
                        return entry[0] + '=' + encodeURIComponent(v);
                    }).join('&');
                }

                return entry[0] + '=' + encodeURIComponent(entry[1]);
            }).join('&');

            if (queryString) {
                queryString = '?' + queryString;
            }

            return fetch('' + path + queryString, Object.assign({}, options, { method: 'GET' })).then(status).then(json);
        }
    }, {
        key: 'post',
        value: function post(path) {
            var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            return fetch(path, Object.assign({}, options, { method: 'POST', body: JSON.stringify(body) })).then(status).then(json);
        }
    }, {
        key: 'upload',
        value: function upload(path, formData) {
            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            return fetch(path, Object.assign({}, options, { method: 'POST', body: formData })).then(status).then(json);
        }
    }, {
        key: 'put',
        value: function put(path) {
            var body = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

            return fetch(path, Object.assign({}, options, { method: 'PUT', body: JSON.stringify(body) })).then(status).then(json);
        }
    }, {
        key: 'delete',
        value: function _delete(path) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            return fetch(path, Object.assign({}, options, { method: 'DELETE' })).then(status).then(json);
        }
    }]);

    return Http;
}();

exports.default = new Http();