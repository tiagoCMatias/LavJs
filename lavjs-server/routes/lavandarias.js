const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Lav = require('../models/lavandarias');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - lav'
    });
});

router.get('/all', (req, res, next) => {
    
    Lav.find()
        .exec()
        .then(doc => {
            if(doc){
                res.status(201).json(doc);
            }
        })
        .catch(error => {
            res.status(401).json({ message: "error fecthing data" });
            //console.log("erro");
        });
});

router.get('/:lavId', (req, res, next) => {
    const id = req.params.lavId;

    Lav.findById(id)
        .exec()
        .then(doc => {
            console.log("database");
            if(doc)
                res.status(200).json(doc);
            else
                res.status(500).json({message: 'No Id'});
        })
        .catch();
});

router.post('/new', (req, res, next) => {

    const lav = new Lav ({
        local: req.body.local,
        name: req.body.name,
        liq_total: req.body.liq_total
    });
    console.log(lav.local);
    console.log(lav.name);
    lav
        .save()
        .then(result => {
            console.log("Sucess");
        })
        .catch(error => {
            console.log(error);
        });
    
    res.status(201).json({
        message: 'New Lav',
        lav: lav
    });
});

router.patch('/:lavId', (req, res, next) => {
    const requestedId = req.params.lavId;

    const updateOps = {};
    for (const ops in req.body){
        updateOps[ops.propName] = ops.value;
    }
    console.log(requestedId);
    Lav.update({ _id: requestedId }, { $set: req.body })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Update - Done',
                result: result
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
        });
});

module.exports = router;