const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    board: { type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, required: true }, // e.g., 'CREATED_TASK', 'MOVED_TASK'
    details: { type: String }, // e.g., 'Task 'Test Task' created in column 'Todo''
    timestamp: { type: Date, default: Date.now }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
