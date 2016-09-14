'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _filterForm = require('./filter-form');

var _filterForm2 = _interopRequireDefault(_filterForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterBox = function (_Component) {
    _inherits(FilterBox, _Component);

    function FilterBox(props) {
        _classCallCheck(this, FilterBox);

        var _this = _possibleConstructorReturn(this, (FilterBox.__proto__ || Object.getPrototypeOf(FilterBox)).call(this, props));

        _this.doFilter = _this.doFilter.bind(_this);
        return _this;
    }

    _createClass(FilterBox, [{
        key: 'doFilter',
        value: function doFilter(params) {
            var router = this.context.router;

            router.push({
                pathname: '/anuncios',
                query: params
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var location = this.props.location;


            return _react2.default.createElement(
                'div',
                { className: 'filter-box-component' },
                _react2.default.createElement(
                    'span',
                    { className: 'title' },
                    'Filtro'
                ),
                _react2.default.createElement(_filterForm2.default, { onSubmit: this.doFilter, initialValues: location.query })
            );
        }
    }]);

    return FilterBox;
}(_react.Component);

FilterBox.propTypes = {
    location: _react.PropTypes.object.isRequired
};

FilterBox.contextTypes = {
    router: _react.PropTypes.object.isRequired
};

exports.default = FilterBox;