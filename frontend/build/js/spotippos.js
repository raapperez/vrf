'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _header = require('./components/header');

var _header2 = _interopRequireDefault(_header);

var _menu = require('./components/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spotippos = function (_Component) {
    _inherits(Spotippos, _Component);

    function Spotippos(props) {
        _classCallCheck(this, Spotippos);

        return _possibleConstructorReturn(this, (Spotippos.__proto__ || Object.getPrototypeOf(Spotippos)).call(this, props));
    }

    _createClass(Spotippos, [{
        key: 'render',
        value: function render() {
            var children = this.props.children;


            return _react2.default.createElement(
                'div',
                { className: 'full-height' },
                _react2.default.createElement(_header2.default, null),
                _react2.default.createElement(_menu2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'page' },
                    children
                )
            );
        }
    }]);

    return Spotippos;
}(_react.Component);

Spotippos.propTypes = {
    children: _react.PropTypes.object.isRequired
};

exports.default = Spotippos;