'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _realtyCard = require('./realty-card');

var _realtyCard2 = _interopRequireDefault(_realtyCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RealtyList = function (_Component) {
    _inherits(RealtyList, _Component);

    function RealtyList(props) {
        _classCallCheck(this, RealtyList);

        return _possibleConstructorReturn(this, (RealtyList.__proto__ || Object.getPrototypeOf(RealtyList)).call(this, props));
    }

    _createClass(RealtyList, [{
        key: 'render',
        value: function render() {
            var properties = this.props.properties;


            return _react2.default.createElement(
                'div',
                { className: 'property-list-component' },
                properties.map(function (property) {
                    return _react2.default.createElement(_realtyCard2.default, { key: property.id, property: property });
                })
            );
        }
    }]);

    return RealtyList;
}(_react.Component);

RealtyList.propTypes = {
    properties: _react.PropTypes.array.isRequired
};

exports.default = RealtyList;