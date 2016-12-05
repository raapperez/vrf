'use strict';

require('core-js');

const {match} = require('react-router');
const ReactDOMServer = require('react-dom/server');
const _ = require('lodash');
const fetch = require('node-fetch');

const env = process.env.NODE_ENV || 'development';

const isDev = env === 'development';
const p = isDev ? 'src' : 'build'; 

const Http = require(`../frontend/${p}/js/services/http`).default;
const SpotipposApi = require(`../frontend/${p}/js/services/spotippos-api`).default;
const filterService = require(`../frontend/${p}/js/services/filter`).default;
const {serverSide} = require(`../frontend/${p}/js/vrf`);
const {routes} = require(`../frontend/${p}/js/vrf`);
const {maxProperties} = require(`../frontend/${p}/js/constants`);

const currencyFormatter = require('currency-formatter');

const spotipposApi = new SpotipposApi(new Http(fetch));


// TODO: remove when property comes with img url
function getRandomImg(id) {
    return `/imgs/property_placeholder_${id % 5}.jpg`;
}

function getAdvertisingsInitialState(req) {
    return spotipposApi.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(response => {
        const properties = _.take(response.properties, maxProperties).map(property => {
            property.img = getRandomImg(property.id);
            return property;
        });
        const filteredProperties = filterService.filterProperties(properties, req.query);

        const header = {
            metas: [
                {
                    name: 'description',
                    content: `Encontre os melhores imóveis para alugar ou comprar.`
                }
            ]
            
        };

        return { initialState: { filteredProperties }, header };
    });
}

function getAdvertisingInitialState(req) {
    return spotipposApi.get('properties', req.params.id).then(property => {
        if (_.isEmpty(property)) {
            const error = new Error(`Property ${req.params.id} not found`);
            error.status = 404;
            throw error;
        }
        property.img = getRandomImg(property.id);
        
        const header = {
            metas: [
                {
                    name: 'description',
                    content: `Compre ${property.title} por ${currencyFormatter.format(property.price, { code: 'BRL' })}`
                },
                {
                    property: 'place:location:latitude',
                    content: property.lat
                },
                {
                    property: 'place:location:longitude',
                    content: property.long
                }
            ]
        };

        return { initialState: { property }, header };
    });
}

function handleRequest(req, res, next, getData) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            next(error);
            return;

        }

        if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            return;
        }

        if (renderProps) {
            if (getData) {
                getData(req).then(data => {
                    res.status(200).render('vrf', {
                        _,
                        data: Object.assign({
                            entryPoint: ReactDOMServer.renderToString(serverSide(renderProps, data.initialState)),
                        }, data)
                    });
                }).catch(err => {
                    next(err);
                });
            } else {
                res.status(200).render('vrf', {
                    _,
                    data: {
                        isDev,
                        entryPoint: ReactDOMServer.renderToString(serverSide(renderProps))
                    }
                });
            }
            return;
        }

        const notFoundError = new Error('Not found');
        notFoundError.status = 404;
        next(notFoundError);

    });
}

module.exports.getAdvertisings = (req, res, next) => {
    handleRequest(req, res, next, getAdvertisingsInitialState);
};

module.exports.getAdvertising = (req, res, next) => {
    handleRequest(req, res, next, getAdvertisingInitialState);
};

module.exports.getDefault = (req, res, next) => {
    handleRequest(req, res, next);
};
