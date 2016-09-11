'use strict';

import React, {Component, PropTypes} from 'react';

class PropertyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {property} = this.props;

        return (
            <div>
                {property.id}
            </div>
        );
    }
}

PropertyCard.propTypes = {
    property: PropTypes.object.isRequired
};

export default PropertyCard;