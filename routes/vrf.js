'use strict';

const express = require('express');
const router = express.Router();
const vrfController = require('../controllers/vrf');

router.get('/anuncios', vrfController.getAdvertisings);
router.get('/anuncio/:id', vrfController.getAdvertising);
router.get('*', vrfController.getDefault);

module.exports = router;