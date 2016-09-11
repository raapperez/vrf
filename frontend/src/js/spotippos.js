'use strict';

import React, {Component, PropTypes} from 'react';
import Header from './components/header';
import Menu from './components/menu';

class Spotippos extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;

        return (
            <div className="full-height">
                <Header />
                <Menu />
                <div className="page">
                    {children}
                </div>
            </div>
        );
    }
}

Spotippos.propTypes = {
    children: PropTypes.object.isRequired
};

export default Spotippos;