'use strict';

const express = require('express');
const router = express.Router();
const {match} = require('react-router');
const vrf = require('../frontend/js/vrf').serverSide;
const {routes} = require('../frontend/js/vrf');
const ReactDOMServer = require('react-dom/server');

router.get('*', function (req, res, next) {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      next(error);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.status(200).render('vrf', {
        data: {
          entryPoint: ReactDOMServer.renderToString(vrf(renderProps))
        }
      });
    } else {
      const error = new Error('Not found');
      error.status = 404;
      next(error);
    }
  });
});

module.exports = router;