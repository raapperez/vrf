'use strict';

import React, {Component, PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import classNames from 'classnames';

const renderField = ({ input, placeholder, min, type, meta: { touched, error } }) => (
    <input {...input} placeholder={placeholder} min={min} type={type} className={classNames({ error: touched && error }) }/>
);


class FilterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { handleSubmit, submitting } = this.props;

        return (
            <form className="form" onSubmit={handleSubmit}>
                <div className="row">
                    <div>
                        <label htmlFor="id">Id</label>
                        <Field id="id" name="id" component={renderField} type="number" min="1"/>
                    </div>
                    <div>
                        <label htmlFor="area">Área</label>
                        <Field id="area" name="area" component={renderField} type="number" min="1"/>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor="beds">Quartos</label>
                        <Field id="beds" name="quartos" component={renderField} type="number" min="1" />
                    </div>
                    <div>
                        <label htmlFor="baths">Banheiros</label>
                        <Field id="baths" name="banheiros" component={renderField} type="number" min="1" />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor="price">Valor</label>
                        <div className="center-align">
                            <Field id="price" name="precoMin" component={renderField} type="number" placeholder="Mínimo" min="1" />
                            <div className="separator"></div>
                            <Field name="precoMax" component={renderField} type="number" placeholder="Máximo" min="1"/>
                        </div>
                    </div>
                </div>
                <div className="submit-row">
                    <input type="submit" value="Filtrar" disabled={submitting} />
                </div>

            </form>

        );
    }
}

FilterForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};



export const validate = values => {
    const errors = {};

    if (!values) {
        return errors;
    }

    if (typeof values.id !== 'undefined' && values.id !== null && values.id !== '') {
        const id = parseInt(values.id);
        if(_.isNaN(id) || id !== parseFloat(values.id) || id < 1) {
            errors.id = 'Not valid id';
        }
    }

    if (typeof values.area !== 'undefined' && values.area !== null && values.area !== '') {
        const area = parseInt(values.area);
        if(_.isNaN(area) || area !== parseFloat(values.area) || area < 1) {
            errors.area = 'Not valid area';
        }
    }

    if (typeof values.quartos !== 'undefined' && values.quartos !== null && values.quartos !== '') {
        const quartos = parseInt(values.quartos);
        if(_.isNaN(quartos) || quartos !== parseFloat(values.quartos) || quartos < 1) {
            errors.quartos = 'Not valid quartos';
        }
    }

    if (typeof values.banheiros !== 'undefined' && values.banheiros !== null && values.banheiros !== '') {
        const banheiros = parseInt(values.banheiros);
        if(_.isNaN(banheiros) || banheiros !== parseFloat(values.banheiros) || banheiros < 1) {
            errors.banheiros = 'Not valid banheiros';
        }
    }

    if (typeof values.precoMin !== 'undefined' && values.precoMin !== null && values.precoMin !== '') {
        const precoMin = parseInt(values.precoMin);
        if(_.isNaN(precoMin) || precoMin !== parseFloat(values.precoMin) || precoMin < 1) {
            errors.precoMin = 'Not valid precoMin';
        }
    }

    if (typeof values.precoMax !== 'undefined' && values.precoMax !== null && values.precoMax !== '') {
        const precoMax = parseInt(values.precoMax);
        if(_.isNaN(precoMax) || precoMax !== parseFloat(values.precoMax) || precoMax < 1) {
            errors.precoMax = 'Not valid precoMax';
        }
    }

    if(typeof values.precoMin !== 'undefined' && values.precoMin !== null && values.precoMin !== '' && typeof values.precoMax !== 'undefined' && values.precoMax !== null && values.precoMax !== '' && parseInt(values.precoMin) > parseInt(values.precoMax)) {
        errors.precoMin = 'Not valid precoMin';
        errors.precoMax = 'Not valid precoMax';
    }

    return errors;
};



export default reduxForm({
    form: 'filter',
    enableReinitialize: true,
    validate
})(FilterForm);
