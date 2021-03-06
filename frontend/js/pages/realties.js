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

var _spotipposApi = require('../services/spotipposApi');

var _spotipposApi2 = _interopRequireDefault(_spotipposApi);

var _vrfActions = require('../actions/vrf-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RealtiesPage = function (_Component) {
    _inherits(RealtiesPage, _Component);

    function RealtiesPage(props) {
        _classCallCheck(this, RealtiesPage);

        return _possibleConstructorReturn(this, (RealtiesPage.__proto__ || Object.getPrototypeOf(RealtiesPage)).call(this, props));
    }

    _createClass(RealtiesPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props;
            var properties = _props.properties;
            var getProperties = _props.getProperties;


            if (!properties.length) {
                getProperties();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var properties = this.props.properties;


            return _react2.default.createElement(
                'div',
                { className: 'realties-page' },
                _react2.default.createElement(_propertyList2.default, { properties: properties })
            );
        }
    }]);

    return RealtiesPage;
}(_react.Component);

RealtiesPage.propTypes = {
    properties: _react.PropTypes.array.isRequired,
    getProperties: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
    return { properties: state.properties };
}, function (dispatch) {
    return {
        getProperties: function getProperties() {
            return _spotipposApi2.default.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(function (response) {
                dispatch((0, _vrfActions.setProperties)(response.properties));
            });
        }
    };
})(RealtiesPage);