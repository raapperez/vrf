'use strict';

import React, {Component, PropTypes} from 'react';

import PropertyCard from './property-card';

class PropertyList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {properties} = this.props;

        return (
            <div className="property-list-component">
                {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                )) }
            </div>
        );
    }
}

PropertyList.propTypes = {
    properties: PropTypes.array.isRequired
};

export default PropertyList;