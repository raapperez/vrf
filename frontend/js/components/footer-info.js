'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterInfo = function (_Component) {
    _inherits(FooterInfo, _Component);

    function FooterInfo(props) {
        _classCallCheck(this, FooterInfo);

        return _possibleConstructorReturn(this, (FooterInfo.__proto__ || Object.getPrototypeOf(FooterInfo)).call(this, props));
    }

    _createClass(FooterInfo, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var imgUrl = _props.imgUrl;
            var children = _props.children;


            return _react2.default.createElement(
                'div',
                { className: 'footer-info-component' },
                _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement('img', { className: 'no-select', src: imgUrl }),
                    _react2.default.createElement(
                        'span',
                        null,
                        children
                    )
                )
            );
        }
    }]);

    return FooterInfo;
}(_react.Component);

FooterInfo.propTypes = {
    imgUrl: _react.PropTypes.string.isRequired,
    children: _react.PropTypes.array.isRequired
};

exports.default = FooterInfo;