const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Liquido = require('../models/liquido');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - liq'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST -liq'
    });
});

module.exports = router;