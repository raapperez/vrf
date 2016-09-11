'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="menu-component">
                <nav>
                    <Link to="/anuncios" activeClassName="selected">
                        <img src="/imgs/building.svg" />
                        <span>Anúncios</span>
                    </Link>
                    <Link to="/novo-anuncio" activeClassName="selected">
                        <img src="/imgs/plus-icon.svg" />
                        <span>Novo anúncio</span>
                    </Link>
                </nav>
            </div>
        );
    }
}

Menu.propTypes = {
};

export default Menu;