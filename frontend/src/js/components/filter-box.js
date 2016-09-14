'use strict';

import React, {Component, PropTypes} from 'react';
import FilterForm from './filter-form';

class FilterBox extends Component {
    constructor(props) {
        super(props);

        this.doFilter = this.doFilter.bind(this);
    }

    doFilter(params) {
        const {router} = this.context;
        router.push({
            pathname: '/anuncios',
            query: params
        });
    }

    render() {
        const {location} = this.props;

        return (
            <div className="filter-box-component">
                <span className="title">Filtro</span>
                <FilterForm onSubmit={this.doFilter} initialValues={location.query} />
            </div>
        );
    }
}

FilterBox.propTypes = {
    location: PropTypes.object.isRequired
};

FilterBox.contextTypes = {
    router: PropTypes.object.isRequired
};

export default FilterBox;