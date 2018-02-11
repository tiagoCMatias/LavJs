const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bombaSchema = Schema({
    designator: { type: String  },
    maq_id: { type: String , required: "Maq_id mandatory."},
    liq_id: { type: String },
    cauldal: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bomba', bombaSchema);