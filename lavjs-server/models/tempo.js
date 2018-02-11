const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempoSchema = Schema({
    bomba_id: { type: String , required: "bomba_id mandatory."},
    programa: { type: String},
    temp_init: { type: Number },
    temp_dur: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tempo', tempoSchema);