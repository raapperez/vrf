'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertyList from '../components/property-list';
import spotipposApi from '../services/spotipposApi';
import {setProperties} from '../actions/vrf-actions';

class AdvertisingsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {properties, getProperties} = this.props;

        if (!properties.length) {
            getProperties();
        }
    }

    render() {
        const {properties} = this.props;

        return (
            <div className="advertisings-page">
                <PropertyList properties={properties} />
            </div>
        );
    }
}

AdvertisingsPage.propTypes = {
    properties: PropTypes.array.isRequired,
    getProperties: PropTypes.func.isRequired
};

function getRandomImg() {
    return `/imgs/property_placeholder_${Math.floor(Math.random() * 5)}.jpg`;
}

export default connect(
    state => ({ properties: state.properties }),
    dispatch => ({
        getProperties: () => {
            return spotipposApi.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(response => {
                dispatch(setProperties(response.properties.map(property => {
                    property.img = getRandomImg();
                    return property;
                })));
            });
        }
    }))(AdvertisingsPage);