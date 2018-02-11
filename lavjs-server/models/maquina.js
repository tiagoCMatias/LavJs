const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maqSchema = Schema({
    name: { type: String },
    programa: { type: String},
    lav_id: { type: String , required: "lav_id mandatory."},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Maquina', maqSchema);