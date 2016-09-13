'use strict';

import React, {Component, PropTypes} from 'react';

class FooterInfo extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const {imgUrl, children} = this.props;

        return (
            <div className="footer-info-component">
                <div className="info">
                    <img className="no-select" src={imgUrl} />
                    <span>{children}</span>
                </div>
            </div>
        );
    }
} 

FooterInfo.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
};

export default FooterInfo;