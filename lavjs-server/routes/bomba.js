const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Maquina = require('../models/maquina');
const Bomba = require('../models/bomba');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET - bomba'
    });
});

router.get('/:maqId', (req, res, next) => {
    const id = req.params.maqId;
    Bomba.find( { 'maq_id': id} )
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

router.post('/newtest', (req, res, next) => {
    const bomba = new Bomba ({
        designator: "bomba de teste",
        maq_id: "5a8047202de10814f8bdf5b6",
        liq_id: "",
        caudal: "1"
    });


});

function findMaquina(id){
    Maquina.findOne( { '_id': bomba.maq_id } )
        .exec()
        .then(doc => {
            console.log("database");
            if(doc)
            {
                return true;
            }
            else
            {
                return false;
            }
        })
        .catch(error => {
            console.log(error);
        });
}

router.post('/new', (req, res, next) => {
    const bomba = new Bomba ({
        designator: req.body.designator,
        maq_id: req.body.maq_id,
        liq_id: req.body.liq_id,
        caudal: req.body.caudal
    });

    Maquina.findOne( { '_id': bomba.maq_id } )
        .exec()
        .then(doc => {
            console.log("database");
            if(doc)
                {
                    bomba
                    .save()
                    .then(result => {
                        console.log("Sucess");
                        res.status(201).json({
                            message: 'New bomba',
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
        message: 'POST - bomba'
    });
});

module.exports = router;