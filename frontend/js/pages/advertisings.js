'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propertyList = require('../components/property-list');

var _propertyList2 = _interopRequireDefault(_propertyList);

var _http = require('../services/http');

var _http2 = _interopRequireDefault(_http);

var _spotipposApi = require('../services/spotippos-api');

var _spotipposApi2 = _interopRequireDefault(_spotipposApi);

var _vrfActions = require('../actions/vrf-actions');

var _filterBox = require('../components/filter-box');

var _filterBox2 = _interopRequireDefault(_filterBox);

var _filter = require('../services/filter');

var _filter2 = _interopRequireDefault(_filter);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdvertisingsPage = function (_Component) {
    _inherits(AdvertisingsPage, _Component);

    function AdvertisingsPage(props) {
        _classCallCheck(this, AdvertisingsPage);

        return _possibleConstructorReturn(this, (AdvertisingsPage.__proto__ || Object.getPrototypeOf(AdvertisingsPage)).call(this, props));
    }

    _createClass(AdvertisingsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props;
            var properties = _props.properties;
            var getProperties = _props.getProperties;
            var setFilteredProperties = _props.setFilteredProperties;
            var location = _props.location;


            if (!properties.length) {
                getProperties().then(function (properties) {
                    setFilteredProperties(_filter2.default.filterProperties(properties, location.query));
                });
            } else {
                setFilteredProperties(_filter2.default.filterProperties(properties, location.query));
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var location = nextProps.location;
            var properties = nextProps.properties;
            var setFilteredProperties = nextProps.setFilteredProperties;


            if (!_lodash2.default.isEqual(location.query, this.props.location.query)) {
                setFilteredProperties(_filter2.default.filterProperties(properties, location.query));
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var properties = _props2.properties;
            var filteredProperties = _props2.filteredProperties;
            var location = _props2.location;


            return _react2.default.createElement(
                'div',
                { className: 'advertisings-page' },
                _react2.default.createElement(_filterBox2.default, { filter: location.query }),
                _react2.default.createElement(
                    'div',
                    { className: 'page-content' },
                    _react2.default.createElement(_propertyList2.default, { properties: filteredProperties, doneLoading: !!properties.length || !!filteredProperties.length })
                )
            );
        }
    }]);

    return AdvertisingsPage;
}(_react.Component);

AdvertisingsPage.propTypes = {
    properties: _react.PropTypes.array.isRequired,
    getProperties: _react.PropTypes.func.isRequired,
    location: _react.PropTypes.object.isRequired,
    filter: _react.PropTypes.object,
    filteredProperties: _react.PropTypes.array.isRequired,
    setFilteredProperties: _react.PropTypes.func.isRequired
};

function getRandomImg(id) {
    return '/imgs/property_placeholder_' + id % 5 + '.jpg';
}

exports.default = (0, _reactRedux.connect)(function (state) {
    return { properties: state.properties, filteredProperties: state.filteredProperties, filter: state.form.filter && state.form.filter.values };
}, function (dispatch) {
    return {
        getProperties: function getProperties() {
            var spotipposApi = new _spotipposApi2.default(new _http2.default(window.fetch));

            return spotipposApi.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(function (response) {
                var properties = _lodash2.default.take(response.properties, 20);
                dispatch((0, _vrfActions.setProperties)(properties.map(function (property) {
                    property.img = getRandomImg(property.id);
                    return property;
                })));
                return properties;
            });
        },
        setFilteredProperties: function setFilteredProperties(filteredProperties) {
            dispatch((0, _vrfActions.setFilteredProperties)(filteredProperties));
        }
    };
})(AdvertisingsPage);