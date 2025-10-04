const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    columns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Column' }]
}, { timestamps: true });

const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
