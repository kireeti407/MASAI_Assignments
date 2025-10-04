const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
    name: { type: String, required: true },
    board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
}, { timestamps: true });

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
