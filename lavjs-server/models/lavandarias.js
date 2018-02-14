const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lavSchema = Schema({
    name: { type: String, require: true },
    liq_total: { type: Number},
    local: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lav', lavSchema);