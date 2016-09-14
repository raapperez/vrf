'use strict';

import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';

class FilterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div>
                        <label htmlFor="id">Id</label>
                        <Field id="id" name="id" component="input" type="number" />
                    </div>
                    <div>
                        <label htmlFor="area">Área</label>
                        <Field id="area" name="area" component="input" type="number" />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor="beds">Quartos</label>
                        <Field id="beds" name="quartos" component="input" type="number" />
                    </div>
                    <div>
                        <label htmlFor="baths">Banheiros</label>
                        <Field id="baths" name="banheiros" component="input" type="number" />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor="price">Valor</label>
                        <div className="center-align">
                            <Field id="price" name="precoMin" component="input" type="text" placeholder="Mínimo" />
                            <div className="separator"></div>
                            <Field name="precoMax" component="input" type="text" placeholder="Máximo" />
                        </div>
                    </div>
                </div>
                <div className="submit-row">
                    <input type="submit" value="Filtrar" />
                </div>

            </form>

        );
    }
}

FilterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'filter',
    enableReinitialize: true
})(FilterForm);
