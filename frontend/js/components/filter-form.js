'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterForm = function (_Component) {
    _inherits(FilterForm, _Component);

    function FilterForm(props) {
        _classCallCheck(this, FilterForm);

        return _possibleConstructorReturn(this, (FilterForm.__proto__ || Object.getPrototypeOf(FilterForm)).call(this, props));
    }

    _createClass(FilterForm, [{
        key: 'render',
        value: function render() {
            var handleSubmit = this.props.handleSubmit;


            return _react2.default.createElement(
                'form',
                { className: 'form', onSubmit: handleSubmit },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'id' },
                            'Id'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { id: 'id', name: 'id', component: 'input', type: 'number' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'area' },
                            'Área'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { id: 'area', name: 'area', component: 'input', type: 'number' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'beds' },
                            'Quartos'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { id: 'beds', name: 'quartos', component: 'input', type: 'number' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'baths' },
                            'Banheiros'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { id: 'baths', name: 'banheiros', component: 'input', type: 'number' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'price' },
                            'Valor'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'center-align' },
                            _react2.default.createElement(_reduxForm.Field, { id: 'price', name: 'precoMin', component: 'input', type: 'text', placeholder: 'Mínimo' }),
                            _react2.default.createElement('div', { className: 'separator' }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'precoMax', component: 'input', type: 'text', placeholder: 'Máximo' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'submit-row' },
                    _react2.default.createElement('input', { type: 'submit', value: 'Filtrar' })
                )
            );
        }
    }]);

    return FilterForm;
}(_react.Component);

FilterForm.propTypes = {
    handleSubmit: _react.PropTypes.func.isRequired
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'filter',
    enableReinitialize: true
})(FilterForm);