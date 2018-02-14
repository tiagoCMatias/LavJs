const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Bomba = require('../models/bomba');
const Tempo = require('../models/tempo');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - tempo'
    });
});

router.get('/:bombaId', (req, res, next) => {
    const id = req.params.maqId;
    Bomba.find( { 'bombaId': id} )
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
    const tempo = new Tempo ({
        bomba_id: req.body.bomba_id,
        programa: req.body.programa,
        temp_init: req.body.temp_init,
        temp_dur: req.body.temp_dur
    });

    Bomba.findOne( { '_id': tempo.bomba_id } )
        .exec()
        .then(doc => {
            console.log("database");
            if(doc)
                {
                    tempo
                    .save()
                    .then(result => {
                        console.log("Sucess");
                        res.status(201).json({
                            message: 'New Time Set',
                            bomba: bomba
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
                }
            else
                res.status(500).json({message: 'No Id'});
            })
        .catch(error => {
            console.log(error);
        });

});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'POST - tempo'
    });
});

module.exports = router;