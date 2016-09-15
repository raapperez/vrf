'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertyCard from '../components/property-card';
import SpotipposApi from '../services/spotippos-api';
import Http from '../services/http';
import {setProperty} from '../actions/vrf-actions';

class AdvertisingPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {params, property, getProperty} = this.props;

        if(!property || property.id != params.id) {
            getProperty(params.id);
        }
    }

    render() {

        const {property, params} = this.props;

        if(!property || params.id !== property.id) {
            return <div>loading</div>;
        }

        return (
            <div className="advertising-page-component">
                <div className="box">
                 <PropertyCard property={property} showFooterBtn={false} />
                </div>
            </div>
        );

    }

}

AdvertisingPage.propTypes = {
    property: PropTypes.object,
    params: PropTypes.object,
    getProperty: PropTypes.func.isRequired
};

function getRandomImg(id) {
    return `/imgs/property_placeholder_${id % 5}.jpg`;
}

export default connect(
    state => ({ property: state.property }),
    dispatch => ({
        getProperty: id => {

            const spotipposApi = new SpotipposApi(new Http(window.fetch));

            return spotipposApi.get('properties', id).then(property => {
                property.img = getRandomImg(id);                                
                dispatch(setProperty(property));
                return property;
            });
        }
    })
)(AdvertisingPage);