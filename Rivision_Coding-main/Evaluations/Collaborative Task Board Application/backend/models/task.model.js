const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    dueDate: { type: Date },
    column: { type: mongoose.Schema.Types.ObjectId, ref: 'Column', required: true }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
