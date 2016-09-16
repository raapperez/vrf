'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderField = function renderField(_ref) {
    var input = _ref.input;
    var placeholder = _ref.placeholder;
    var min = _ref.min;
    var type = _ref.type;
    var _ref$meta = _ref.meta;
    var touched = _ref$meta.touched;
    var error = _ref$meta.error;
    return _react2.default.createElement('input', _extends({}, input, { placeholder: placeholder, min: min, type: type, className: (0, _classnames2.default)({ error: touched && error }) }));
};

var FilterForm = function (_Component) {
    _inherits(FilterForm, _Component);

    function FilterForm(props) {
        _classCallCheck(this, FilterForm);

        return _possibleConstructorReturn(this, (FilterForm.__proto__ || Object.getPrototypeOf(FilterForm)).call(this, props));
    }

    _createClass(FilterForm, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var handleSubmit = _props.handleSubmit;
            var submitting = _props.submitting;


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
                        _react2.default.createElement(_reduxForm.Field, { id: 'id', name: 'id', component: renderField, type: 'number', min: '1' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'area' },
                            'Área'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { id: 'area', name: 'area', component: renderField, type: 'number', min: '1' })
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
                        _react2.default.createElement(_reduxForm.Field, { id: 'beds', name: 'quartos', component: renderField, type: 'number', min: '1' })
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'label',
                            { htmlFor: 'baths' },
                            'Banheiros'
                        ),
                        _react2.default.createElement(_reduxForm.Field, { id: 'baths', name: 'banheiros', component: renderField, type: 'number', min: '1' })
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
                            _react2.default.createElement(_reduxForm.Field, { id: 'price', name: 'precoMin', component: renderField, type: 'number', placeholder: 'Mínimo', min: '1' }),
                            _react2.default.createElement('div', { className: 'separator' }),
                            _react2.default.createElement(_reduxForm.Field, { name: 'precoMax', component: renderField, type: 'number', placeholder: 'Máximo', min: '1' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'submit-row' },
                    _react2.default.createElement('input', { type: 'submit', value: 'Filtrar', disabled: submitting })
                )
            );
        }
    }]);

    return FilterForm;
}(_react.Component);

FilterForm.propTypes = {
    handleSubmit: _react.PropTypes.func.isRequired,
    submitting: _react.PropTypes.bool.isRequired
};

var validate = exports.validate = function validate(values) {
    var errors = {};

    if (typeof values.id !== 'undefined' && values.id !== null && values.id !== '') {
        var id = parseInt(values.id);
        if (_lodash2.default.isNaN(id) || id !== parseFloat(values.id) || id < 1) {
            errors.id = 'Not valid id';
        }
    }

    if (typeof values.area !== 'undefined' && values.area !== null && values.area !== '') {
        var area = parseInt(values.area);
        if (_lodash2.default.isNaN(area) || area !== parseFloat(values.area) || area < 1) {
            errors.area = 'Not valid area';
        }
    }

    if (typeof values.quartos !== 'undefined' && values.quartos !== null && values.quartos !== '') {
        var quartos = parseInt(values.quartos);
        if (_lodash2.default.isNaN(quartos) || quartos !== parseFloat(values.quartos) || quartos < 1) {
            errors.quartos = 'Not valid quartos';
        }
    }

    if (typeof values.banheiros !== 'undefined' && values.banheiros !== null && values.banheiros !== '') {
        var banheiros = parseInt(values.banheiros);
        if (_lodash2.default.isNaN(banheiros) || banheiros !== parseFloat(values.banheiros) || banheiros < 1) {
            errors.banheiros = 'Not valid banheiros';
        }
    }

    if (typeof values.precoMin !== 'undefined' && values.precoMin !== null && values.precoMin !== '') {
        var precoMin = parseInt(values.precoMin);
        if (_lodash2.default.isNaN(precoMin) || precoMin !== parseFloat(values.precoMin) || precoMin < 1) {
            errors.precoMin = 'Not valid precoMin';
        }
    }

    if (typeof values.precoMax !== 'undefined' && values.precoMax !== null && values.precoMax !== '') {
        var precoMax = parseInt(values.precoMax);
        if (_lodash2.default.isNaN(precoMax) || precoMax !== parseFloat(values.precoMax) || precoMax < 1) {
            errors.precoMax = 'Not valid precoMax';
        }
    }

    if (typeof values.precoMin !== 'undefined' && values.precoMin !== null && values.precoMin !== '' && typeof values.precoMax !== 'undefined' && values.precoMax !== null && values.precoMax !== '' && parseInt(values.precoMin) > parseInt(values.precoMax)) {
        errors.precoMin = 'Not valid precoMin';
        errors.precoMax = 'Not valid precoMax';
    }

    return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
    form: 'filter',
    enableReinitialize: true,
    validate: validate
})(FilterForm);