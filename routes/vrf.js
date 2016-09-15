'use strict';
require('core-js');
const express = require('express');
const router = express.Router();
const {match} = require('react-router');
const {serverSide} = require('../frontend/js/vrf');
const {routes} = require('../frontend/js/vrf');
const ReactDOMServer = require('react-dom/server');
const _ = require('lodash');
const fetch = require('node-fetch');

const Http = require('../frontend/js/services/http').default;
const SpotipposApi = require('../frontend/js/services/spotippos-api').default;
const filterService = require('../frontend/js/services/filter').default;

const spotipposApi = new SpotipposApi(new Http(fetch));

function getRandomImg(id) {
  return `/imgs/property_placeholder_${id % 5}.jpg`;
}

function getAdvertisingsInitialState(req) {
  return spotipposApi.list('properties', { ax: 1, ay: 1, bx: 1400, by: 1000 }).then(response => {
    const properties = _.take(response.properties, 20).map(property => {
      property.img = getRandomImg(property.id);
      return property;
    });
    const filteredProperties = filterService.filterProperties(properties, req.query);

    return { filteredProperties };
  });
}

function getAdvertisingInitialState(req) {
  return spotipposApi.get('properties', req.params.id).then(property => {
    property.img = getRandomImg(property.id);
    return { property };
  });
}

function handleRequest(req, res, next, getInitialState) {
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
      if (getInitialState) {
        getInitialState(req).then(initialState => {
          res.status(200).render('vrf', {
            data: {
              entryPoint: ReactDOMServer.renderToString(serverSide(renderProps, initialState)),
              initialState
            }
          });
        }).catch(err => {
          next(err);
        });
      } else {
        res.status(200).render('vrf', {
          data: {
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

router.get('/anuncios', (req, res, next) => {
  handleRequest(req, res, next, getAdvertisingsInitialState);
});

router.get('/anuncio/:id', (req, res, next) => {
  handleRequest(req, res, next, getAdvertisingInitialState);
});

router.get('*', (req, res, next) => {
  handleRequest(req, res, next);
});

module.exports = router;