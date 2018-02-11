const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const liquidoSchema = Schema({
    name: { type: String },
    quantity: { type: Number},
    lav_id: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Liquido', liquidoSchema);