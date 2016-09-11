'use strict';

import React, {Component} from 'react';

class NoPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="no-page">
                Esta página não faz parte do escopo! :D
            </div>
        );
    }
}

export default NoPage;