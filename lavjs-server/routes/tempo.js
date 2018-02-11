const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Tempo = require('../models/tempo');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - tempo'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST - tempo'
    });
});

module.exports = router;