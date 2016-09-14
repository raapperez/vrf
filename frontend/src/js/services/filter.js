'use strict';

class FilterSerice {
    filterProperties(properties, filters) {
        
        return properties.filter(property => {
            if(filters.id && property.id !== filters.id) {
                return false;
            }

            if(filters.area && parseInt(property.squareMeters) !== parseInt(filters.area)) {
                return false;
            }

            if(filters.quartos && parseInt(property.beds) !== parseInt(filters.quartos)) {
                return false;
            }

            if(filters.banheiros && parseInt(property.baths) !== parseInt(filters.banheiros)) {
                return false;
            }

            if(filters.precoMin && parseInt(property.price) < parseInt(filters.precoMin)) {
                return false;
            }

            if(filters.precoMax && parseInt(property.price) > parseInt(filters.precoMax)) {
                return false;
            }

            return true;
        });

    }
}

export default new FilterSerice();