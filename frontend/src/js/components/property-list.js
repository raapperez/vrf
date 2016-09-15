'use strict';

import React, {Component, PropTypes} from 'react';

import PropertyCard from './property-card';
import Loading from './loading';

class PropertyList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {properties, doneLoading} = this.props;

        if (!doneLoading) {
            return (
                <div className="property-list-component">
                    <Loading />
                </div>
            );
        }

        if (!properties.length) {
            return (
                <div className="property-list-component">
                    <p className="info">Não foram encontrados anúncios para sua busca.</p>
                </div>
            );
        }

        

        return (
            <div className="property-list-component">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} showFooterBtn={true} />
                )) }
            </div>
        );
    }
}

PropertyList.propTypes = {
    properties: PropTypes.array.isRequired,
    doneLoading: PropTypes.bool.isRequired
};

export default PropertyList;