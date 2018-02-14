const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Maquina = require('../models/maquina');

router.get('/', (req, res, next) => {

    Maquina.find()
        .exec()
        .then(doc => {
            console.log(doc);
            if(doc)
                res.status(200).json({message : doc});
            else
                res.status(500).json({message: 'No entries'});
        })
        .catch(error => {
            console.log(error);
        });

});

router.get('/all', (req, res, next) => {
    Maquina.find()
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
    const id = req.params.maqId;

    Maquina.findOne( { 'lav_id': id} )
        .exec()
        .then(doc => {
            console.log("database");
            if(doc)
                res.status(200).json(doc);
            else
                res.status(500).json({message: 'No Id'});
        })
        .catch(error => {
            console.log(error);
        });
});

router.post('/new', (req, res, next) => {

    const maquina = new Maquina ({
        name: req.body.name,
        programa: req.body.programa,
        lav_id: req.body.lav_id
    });

    maquina
        .save()
        .then(result => {
            console.log("Sucess");
        })
        .catch(error => {
            console.log(error);
        });
    
    res.status(201).json({
        message: 'New maquina',
        maquina: maquina
    });
});

router.patch('/:lavId', (req, res, next) => {
    const requestedId = req.params.lavId;

    const updateOps = {};
    for (const ops in req.body){
        updateOps[ops.propName] = ops.value;
    }
    console.log(requestedId);
    Maquina.update({ _id: requestedId }, { $set: req.body })
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