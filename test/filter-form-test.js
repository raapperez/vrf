'use strict';

const chai = require('chai');
const should = chai.should();

const validate = require('../frontend/js/components/filter-form').validate;


describe('validate', () => {

    describe('id', () => {
        it('Should accept 23213', () => {
            const errors = validate({ id: 23213 });
            should.not.exist(errors.id);
        });

        it('Should accept "23213"', () => {
            const errors = validate({ id: '23213' });
            should.not.exist(errors.id);
        });        

        it('Should accept ""', () => {
            const errors = validate({ id: '' });
            should.not.exist(errors.id);
        });

        it('Should accept undefined', () => {
            const errors = validate({ id: undefined });
            should.not.exist(errors.id);
        });

        it('Should accept null', () => {
            const errors = validate({ id: null });
            should.not.exist(errors.id);
        });


        it('Should not accept 23.213', () => {
            const errors = validate({ id: 23.213 });
            should.exist(errors.id);
        });

        it('Should not accept -23.213', () => {
            const errors = validate({ id: -23.213 });
            should.exist(errors.id);
        });

        it('Should not accept 0', () => {
            const errors = validate({ id: 0 });
            should.exist(errors.id);
        });

        it('Should not accept -23213', () => {
            const errors = validate({ id: -23213 });
            should.exist(errors.id);
        });
    });

    describe('area', () => {
        it('Should accept 23213', () => {
            const errors = validate({ area: 23213 });
            should.not.exist(errors.area);
        });

        it('Should accept "23213"', () => {
            const errors = validate({ area: '23213' });
            should.not.exist(errors.area);
        });        

        it('Should accept ""', () => {
            const errors = validate({ area: '' });
            should.not.exist(errors.area);
        });

        it('Should accept undefined', () => {
            const errors = validate({ area: undefined });
            should.not.exist(errors.area);
        });

        it('Should accept null', () => {
            const errors = validate({ area: null });
            should.not.exist(errors.area);
        });


        it('Should not accept 23.213', () => {
            const errors = validate({ area: 23.213 });
            should.exist(errors.area);
        });

        it('Should not accept -23.213', () => {
            const errors = validate({ area: -23.213 });
            should.exist(errors.area);
        });

        it('Should not accept 0', () => {
            const errors = validate({ area: 0 });
            should.exist(errors.area);
        });

        it('Should not accept -23213', () => {
            const errors = validate({ area: -23213 });
            should.exist(errors.area);
        });
    });

    describe('quartos', () => {
        it('Should accept 23213', () => {
            const errors = validate({ quartos: 23213 });
            should.not.exist(errors.quartos);
        });

        it('Should accept "23213"', () => {
            const errors = validate({ quartos: '23213' });
            should.not.exist(errors.quartos);
        });        

        it('Should accept ""', () => {
            const errors = validate({ quartos: '' });
            should.not.exist(errors.quartos);
        });

        it('Should accept undefined', () => {
            const errors = validate({ quartos: undefined });
            should.not.exist(errors.quartos);
        });

        it('Should accept null', () => {
            const errors = validate({ quartos: null });
            should.not.exist(errors.quartos);
        });


        it('Should not accept 23.213', () => {
            const errors = validate({ quartos: 23.213 });
            should.exist(errors.quartos);
        });

        it('Should not accept -23.213', () => {
            const errors = validate({ quartos: -23.213 });
            should.exist(errors.quartos);
        });

        it('Should not accept 0', () => {
            const errors = validate({ quartos: 0 });
            should.exist(errors.quartos);
        });

        it('Should not accept -23213', () => {
            const errors = validate({ quartos: -23213 });
            should.exist(errors.quartos);
        });
    });

    describe('banheiros', () => {
        it('Should accept 23213', () => {
            const errors = validate({ banheiros: 23213 });
            should.not.exist(errors.banheiros);
        });

        it('Should accept "23213"', () => {
            const errors = validate({ banheiros: '23213' });
            should.not.exist(errors.banheiros);
        });        

        it('Should accept ""', () => {
            const errors = validate({ banheiros: '' });
            should.not.exist(errors.banheiros);
        });

        it('Should accept undefined', () => {
            const errors = validate({ banheiros: undefined });
            should.not.exist(errors.banheiros);
        });

        it('Should accept null', () => {
            const errors = validate({ banheiros: null });
            should.not.exist(errors.banheiros);
        });


        it('Should not accept 23.213', () => {
            const errors = validate({ banheiros: 23.213 });
            should.exist(errors.banheiros);
        });

        it('Should not accept -23.213', () => {
            const errors = validate({ banheiros: -23.213 });
            should.exist(errors.banheiros);
        });

        it('Should not accept 0', () => {
            const errors = validate({ banheiros: 0 });
            should.exist(errors.banheiros);
        });

        it('Should not accept -23213', () => {
            const errors = validate({ banheiros: -23213 });
            should.exist(errors.banheiros);
        });
    });

    describe('precoMin', () => {
        it('Should accept 23213', () => {
            const errors = validate({ precoMin: 23213 });
            should.not.exist(errors.precoMin);
        });

        it('Should accept "23213"', () => {
            const errors = validate({ precoMin: '23213' });
            should.not.exist(errors.precoMin);
        });        

        it('Should accept ""', () => {
            const errors = validate({ precoMin: '' });
            should.not.exist(errors.precoMin);
        });

        it('Should accept undefined', () => {
            const errors = validate({ precoMin: undefined });
            should.not.exist(errors.precoMin);
        });

        it('Should accept null', () => {
            const errors = validate({ precoMin: null });
            should.not.exist(errors.precoMin);
        });


        it('Should not accept 23.213', () => {
            const errors = validate({ precoMin: 23.213 });
            should.exist(errors.precoMin);
        });

        it('Should not accept -23.213', () => {
            const errors = validate({ precoMin: -23.213 });
            should.exist(errors.precoMin);
        });

        it('Should not accept 0', () => {
            const errors = validate({ precoMin: 0 });
            should.exist(errors.precoMin);
        });

        it('Should not accept -23213', () => {
            const errors = validate({ precoMin: -23213 });
            should.exist(errors.precoMin);
        });

        it('Should accept precoMin < precoMax', () => {
            const errors = validate({ precoMin: 100000, precoMax: 400000 });
            should.not.exist(errors.precoMin);
            should.not.exist(errors.precoMax);
        });

        it('Should accept precoMin = precoMax', () => {
            const errors = validate({ precoMin: 400000, precoMax: 400000 });
            should.not.exist(errors.precoMin);
            should.not.exist(errors.precoMax);
        });

        it('Should not accept precoMin > precoMax', () => {
            const errors = validate({ precoMin: 400001, precoMax: 400000 });
            should.exist(errors.precoMin);
            should.exist(errors.precoMax);
        });
    });

    describe('precoMax', () => {
        it('Should accept 23213', () => {
            const errors = validate({ precoMax: 23213 });
            should.not.exist(errors.precoMax);
        });

        it('Should accept "23213"', () => {
            const errors = validate({ precoMax: '23213' });
            should.not.exist(errors.precoMax);
        });        

        it('Should accept ""', () => {
            const errors = validate({ precoMax: '' });
            should.not.exist(errors.precoMax);
        });

        it('Should accept undefined', () => {
            const errors = validate({ precoMax: undefined });
            should.not.exist(errors.precoMax);
        });

        it('Should accept null', () => {
            const errors = validate({ precoMax: null });
            should.not.exist(errors.precoMax);
        });


        it('Should not accept 23.213', () => {
            const errors = validate({ precoMax: 23.213 });
            should.exist(errors.precoMax);
        });

        it('Should not accept -23.213', () => {
            const errors = validate({ precoMax: -23.213 });
            should.exist(errors.precoMax);
        });

        it('Should not accept 0', () => {
            const errors = validate({ precoMax: 0 });
            should.exist(errors.precoMax);
        });

        it('Should not accept -23213', () => {
            const errors = validate({ precoMax: -23213 });
            should.exist(errors.precoMax);
        });
    });
});
