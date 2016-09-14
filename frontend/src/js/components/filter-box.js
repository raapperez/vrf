'use strict';

import React, {Component, PropTypes} from 'react';

class FilterBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="filter-box-component">
                <span className="title">Filtro</span>
                <form className="form">
                    <div className="row">
                        <div>
                            <label>Id</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label>Área</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label>Quartos</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label>Banheiros</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <label>Valor</label>
                            <div className="center-align">
                                <input type="text" placeholder="Mínimo" />
                                <div className="separator"></div>                         
                                <input type="text" placeholder="Máximo" />
                            </div>
                        </div>
                    </div>


                </form>
            </div>
        );
    }
}

FilterBox.propTypes = {
};

export default FilterBox;