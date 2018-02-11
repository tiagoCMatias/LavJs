const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//routes
const tempoRoute = require('./routes/tempo');
const maquinaRoute = require('./routes/maquina');
const liquidoRoute = require('./routes/liquido');
const lavRoute = require('./routes/lavandarias');
const bombaRoute = require('./routes/bomba');


//connect to mongodb
//console.log(process.env.MONGO_ATLAS_PW);

const url = process.env.MONGODB_URI || "mongodb://localhost/Hegi"; 
mongoose.connect(url);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request headers you wish to allow
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, cache-control, pragma, Accept, Authorization');

    if(req.method === "OPTIONS")
    {
        res.header('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

/** Handling routes */
app.use('/tempo', tempoRoute);
app.use('/maquina', maquinaRoute);
app.use('/liquido', liquidoRoute);
app.use('/lavandaria', lavRoute);
app.use('/bomba', bombaRoute);

/** Error Handling */
app.use( (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use( (error, req, res, next) => {
    res.status(error.status || 500);
    console.log(error);
    res.json({
        error: {
            message: 'error'
        }
    });
});

module.exports = app;