'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propertyCard = require('../components/property-card');

var _propertyCard2 = _interopRequireDefault(_propertyCard);

var _spotipposApi = require('../services/spotippos-api');

var _spotipposApi2 = _interopRequireDefault(_spotipposApi);

var _http = require('../services/http');

var _http2 = _interopRequireDefault(_http);

var _vrfActions = require('../actions/vrf-actions');

var _loading = require('../components/loading');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdvertisingPage = function (_Component) {
    _inherits(AdvertisingPage, _Component);

    function AdvertisingPage(props) {
        _classCallCheck(this, AdvertisingPage);

        return _possibleConstructorReturn(this, (AdvertisingPage.__proto__ || Object.getPrototypeOf(AdvertisingPage)).call(this, props));
    }

    _createClass(AdvertisingPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props;
            var params = _props.params;
            var property = _props.property;
            var getProperty = _props.getProperty;


            if (!property || property.id != params.id) {
                getProperty(params.id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var property = _props2.property;
            var params = _props2.params;


            return _react2.default.createElement(
                'div',
                { className: 'advertising-page-component' },
                _react2.default.createElement(
                    'div',
                    { className: 'box' },
                    !property || params.id !== property.id ? _react2.default.createElement(_loading2.default, null) : _react2.default.createElement(_propertyCard2.default, { property: property, showFooterBtn: false })
                )
            );
        }
    }]);

    return AdvertisingPage;
}(_react.Component);

AdvertisingPage.propTypes = {
    property: _react.PropTypes.object,
    params: _react.PropTypes.object,
    getProperty: _react.PropTypes.func.isRequired
};

// TODO: remove when property comes with img url
function getRandomImg(id) {
    return '/imgs/property_placeholder_' + id % 5 + '.jpg';
}

exports.default = (0, _reactRedux.connect)(function (state) {
    return { property: state.property };
}, function (dispatch) {
    return {
        getProperty: function getProperty(id) {

            var spotipposApi = new _spotipposApi2.default(new _http2.default(window.fetch));

            return spotipposApi.get('properties', id).then(function (property) {
                property.img = getRandomImg(id);
                dispatch((0, _vrfActions.setProperty)(property));
                return property;
            });
        }
    };
})(AdvertisingPage);