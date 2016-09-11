'use strict';

import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <header className="header-component">
                <div className="logo-box">
                    <img src="/imgs/logo-vivareal.svg" className="logo" />
                </div>
                <h1 className="title">SPOTIPPOS - ANÚNCIOS</h1>
            </header>
        );
    }
}

export default Header;