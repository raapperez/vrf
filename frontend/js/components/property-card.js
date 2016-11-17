'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _footerInfo = require('./footer-info');

var _footerInfo2 = _interopRequireDefault(_footerInfo);

var _currencyFormatter = require('currency-formatter');

var _currencyFormatter2 = _interopRequireDefault(_currencyFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PropertyCard = function (_Component) {
    _inherits(PropertyCard, _Component);

    function PropertyCard(props) {
        _classCallCheck(this, PropertyCard);

        return _possibleConstructorReturn(this, (PropertyCard.__proto__ || Object.getPrototypeOf(PropertyCard)).call(this, props));
    }

    _createClass(PropertyCard, [{
        key: 'formatPrice',
        value: function formatPrice(price) {
            return _currencyFormatter2.default.format(price, { code: 'BRL' }).replace(/,.*$/, '');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                property = _props.property,
                showFooterBtn = _props.showFooterBtn;


            return _react2.default.createElement(
                'article',
                { className: 'property-card-component' },
                _react2.default.createElement(
                    'div',
                    { className: 'left-box' },
                    _react2.default.createElement('img', { className: 'no-select', src: property.img, alt: property.title }),
                    _react2.default.createElement(
                        'span',
                        { className: 'price' },
                        this.formatPrice(property.price)
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'right-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                            'span',
                            { className: 'id' },
                            'ID.',
                            property.id
                        ),
                        _react2.default.createElement(
                            'h2',
                            { className: 'title' },
                            property.title
                        ),
                        _react2.default.createElement(
                            'p',
                            { className: 'description' },
                            property.description
                        ),
                        _react2.default.createElement('img', { className: 'no-select img', src: property.img, alt: property.title }),
                        _react2.default.createElement(
                            'span',
                            { className: 'price' },
                            this.formatPrice(property.price)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer' },
                        _react2.default.createElement(
                            _footerInfo2.default,
                            { imgUrl: '/imgs/ic-card-area.svg' },
                            property.squareMeters,
                            ' M\xB2'
                        ),
                        _react2.default.createElement(
                            _footerInfo2.default,
                            { imgUrl: '/imgs/ic-card-beds.svg' },
                            property.beds,
                            ' Quarto',
                            parseInt(property.beds) === 1 ? '' : 's'
                        ),
                        _react2.default.createElement(
                            _footerInfo2.default,
                            { imgUrl: '/imgs/ic-card-bathroom.svg' },
                            property.baths,
                            ' Banheiro',
                            parseInt(property.baths) === 1 ? '' : 's'
                        ),
                        showFooterBtn ? _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/anuncio/' + property.id, title: 'Ver detalhes de ' + property.title },
                            'Visualizar an\xFAncio'
                        ) : null
                    )
                )
            );
        }
    }]);

    return PropertyCard;
}(_react.Component);

PropertyCard.propTypes = {
    property: _react.PropTypes.object.isRequired,
    showFooterBtn: _react.PropTypes.bool.isRequired
};

exports.default = PropertyCard;