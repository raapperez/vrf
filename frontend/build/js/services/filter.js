'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterSerice = function () {
    function FilterSerice() {
        _classCallCheck(this, FilterSerice);
    }

    _createClass(FilterSerice, [{
        key: 'filterProperties',
        value: function filterProperties(properties, filters) {

            return properties.filter(function (property) {
                if (filters.id && property.id !== filters.id) {
                    return false;
                }

                if (filters.area && parseInt(property.squareMeters) !== parseInt(filters.area)) {
                    return false;
                }

                if (filters.quartos && parseInt(property.beds) !== parseInt(filters.quartos)) {
                    return false;
                }

                if (filters.banheiros && parseInt(property.baths) !== parseInt(filters.banheiros)) {
                    return false;
                }

                if (filters.precoMin && parseInt(property.price) < parseInt(filters.precoMin)) {
                    return false;
                }

                if (filters.precoMax && parseInt(property.price) > parseInt(filters.precoMax)) {
                    return false;
                }

                return true;
            });
        }
    }]);

    return FilterSerice;
}();

exports.default = new FilterSerice();