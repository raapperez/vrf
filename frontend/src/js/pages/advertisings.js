'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertyList from '../components/property-list';
import Http from '../services/http';
import SpotipposApi from '../services/spotippos-api';
import {setProperties, setFilteredProperties} from '../actions/vrf-actions';
import FilterBox from '../components/filter-box';
import filterService from '../services/filter';
import _ from 'lodash';

class AdvertisingsPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {properties, getProperties, setFilteredProperties, location} = this.props;
        
        if (!properties.length) {
            getProperties().then(properties => {
                setFilteredProperties(filterService.filterProperties(properties, location.query));
            });
        } else {
            setFilteredProperties(filterService.filterProperties(properties, location.query));
        }
    }

    componentWillReceiveProps(nextProps) {
        const {location, properties, setFilteredProperties} = nextProps;

        if(!_.isEqual(location.query, this.props.location.query)) {
            setFilteredProperties(filterService.filterProperties(properties, location.query));   
        }
    }

    render() {
        const {filteredProperties, location} = this.props;

        return (
            <div className="advertisings-page">
                <FilterBox filter={location.query} />
                <div className="page-content">
                    <PropertyList properties={filteredProperties} />
                </div>
            </div>
        );
    }
}

AdvertisingsPage.propTypes = {
    properties: PropTypes.array.isRequired,
    getProperties: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    filter: PropTypes.object,
    filteredProperties: PropTypes.array.isRequired,
    setFilteredProperties: PropTypes.func.isRequired
};

function getRandomImg(id) {
    return `/imgs/property_placeholder_${id % 5}.jpg`;
}

export default connect(
    state => ({ properties: state.properties, filteredProperties: state.filteredProperties, filter: state.form.filter && state.form.filter.values }),
    dispatch => ({
        getProperties: () => {
            const spotipposApi = new SpotipposApi(new Http(window.fetch));

            return spotipposApi.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(response => {
                const properties = _.take(response.properties, 20);
                dispatch(setProperties(properties.map(property => {
                    property.img = getRandomImg(property.id);
                    return property;
                })));
                return properties;
            });
        },
        setFilteredProperties: filteredProperties => {
            dispatch(setFilteredProperties(filteredProperties));
        }
    })
)(AdvertisingsPage);