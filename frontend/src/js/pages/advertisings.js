'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertyList from '../components/property-list';
import spotipposApi from '../services/spotipposApi';
import {setProperties} from '../actions/vrf-actions';
import FilterBox from '../components/filter-box';

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
        const {properties, location, filter} = this.props;

        console.log(filter);

        return (
            <div className="advertisings-page">
                <FilterBox location={location} />
                <div className="page-content">
                    <PropertyList properties={properties} />
                </div>
            </div>
        );
    }
}

AdvertisingsPage.propTypes = {
    properties: PropTypes.array.isRequired,
    getProperties: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    filter: PropTypes.object
};

function getRandomImg() {
    return `/imgs/property_placeholder_${Math.floor(Math.random() * 5)}.jpg`;
}

export default connect(
    state => ({ properties: state.properties, filter: state.form.filter && state.form.filter.values }),
    dispatch => ({
        getProperties: () => {
            return spotipposApi.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(response => {
                dispatch(setProperties(response.properties.map(property => {
                    property.img = getRandomImg();
                    return property;
                })));
            });
        }
    })
)(AdvertisingsPage);