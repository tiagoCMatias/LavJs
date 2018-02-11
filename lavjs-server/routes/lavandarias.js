const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Lav = require('../models/lavandarias');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - lav'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST - lav'
    });
});

module.exports = router;