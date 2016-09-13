'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import FooterInfo from './footer-info';

class PropertyCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {property} = this.props;

        return (
            <div className="property-card-component">
                <div className="left-box">
                    <img src={property.img} />
                </div>
                <div className="right-box">
                    <div className="content">
                        <span className="id">ID. {property.id}</span>
                        <h2 className="title">{property.title}</h2>
                        <p className="description">{property.description}</p>
                    </div>

                    <div className="footer">
                        <FooterInfo imgUrl="/imgs/ic-card-area.svg">
                            {property.squareMeters} M²
                        </FooterInfo>
                        <FooterInfo imgUrl="/imgs/ic-card-beds.svg">
                            {property.beds} Quartos
                        </FooterInfo>
                        <FooterInfo imgUrl="/imgs/ic-card-bathroom.svg">
                            {property.baths} Banheiros
                        </FooterInfo>
                        <Link to={`/anuncio/${property.id}`}>Visualizar anúncio</Link>
                    </div>
                </div>


            </div>
        );
    }
}

PropertyCard.propTypes = {
    property: PropTypes.object.isRequired
};

export default PropertyCard;