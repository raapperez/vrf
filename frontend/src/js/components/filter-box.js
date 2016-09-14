'use strict';

import React, {Component, PropTypes} from 'react';
import FilterForm from './filter-form';
import _ from 'lodash';

class FilterBox extends Component {
    constructor(props) {
        super(props);

        this.doFilter = this.doFilter.bind(this);
    }

    

    doFilter(params) {
        const {router} = this.context;
        router.push({
            pathname: '/anuncios',
            query: _.pickBy(params)
        });
    }

    render() {
        const {filter} = this.props;

        return (
            <div className="filter-box-component">
                <span className="title">Filtro</span>
                <FilterForm onSubmit={this.doFilter} initialValues={filter} />
            </div>
        );
    }
}

FilterBox.propTypes = {
    filter: PropTypes.object.isRequired
};

FilterBox.contextTypes = {
    router: PropTypes.object.isRequired
};

export default FilterBox;