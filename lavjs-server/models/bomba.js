const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempoSchema = Schema({
    programa: { type: String},
    temp_init: { type: Number },
    temp_dur: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}); 

const bombaSchema = Schema({
    designator: { type: String  },
    maq_id: { type: String },
    liq_id: { type: String },
    cauldal: { type: Number },
    tempo: [ tempoSchema ],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bomba', bombaSchema);