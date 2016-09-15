'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import PropertyCard from '../components/property-card';
import SpotipposApi from '../services/spotippos-api';
import Http from '../services/http';
import {setProperty} from '../actions/vrf-actions';
import Loading from '../components/loading';
import _ from 'lodash';

class AdvertisingPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {params, property, getProperty} = this.props;

        if (!property || property.id != params.id) {
            getProperty(params.id);
        }
    }

    render() {

        const {property, params} = this.props;

        return (
            <div className="advertising-page-component">
                <div className="box">

                    {!property || params.id !== property.id ?
                        <Loading />
                        :
                        <PropertyCard property={property} showFooterBtn={false} />
                    }
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

// TODO: remove when property comes with img url
function getRandomImg(id) {
    return `/imgs/property_placeholder_${id % 5}.jpg`;
}

export default connect(
    state => ({ property: state.property }),
    dispatch => ({
        getProperty: id => {

            const spotipposApi = new SpotipposApi(new Http(window.fetch));

            return spotipposApi.get('properties', id).then(property => {
                if(_.isEmpty(property)) {
                    window.location.reload(true); 
                }
                property.img = getRandomImg(id);
                dispatch(setProperty(property));
                return property;
            });
        }
    })
)(AdvertisingPage);