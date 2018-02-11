const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Bomba = require('../models/bomba');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - bomba'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST - bomba'
    });
});

module.exports = router;