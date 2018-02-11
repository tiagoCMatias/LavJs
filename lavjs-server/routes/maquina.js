const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Maquina = require('../models/maquina');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET -maq'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST -maq'
    });
});

module.exports = router;