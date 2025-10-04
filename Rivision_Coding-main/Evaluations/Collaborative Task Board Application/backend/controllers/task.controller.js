const Task = require('../models/task.model');
const Column = require('../models/column.model');
const Board = require('../models/board.model');
const Activity = require('../models/activity.model');

// A helper function to log activities
const logActivity = async (boardId, userId, action, details) => {
    try {
        await Activity.create({
            board: boardId,
            user: userId,
            action,
            details
        });
    } catch (error) {
        console.error('Failed to log activity:', error);
    }
};


const createTask = async (req, res) => {
    const { title, description, assignedTo, dueDate, columnId } = req.body;
    const { boardId } = req.params;

    try {
        const column = await Column.findById(columnId);
        if (!column || column.board.toString() !== boardId) {
            return res.status(404).json({ message: 'Column not found in this board' });
        }

        const task = new Task({
            title,
            description,
            assignedTo,
            dueDate,
            column: columnId
        });

        const createdTask = await task.save();
        column.tasks.push(createdTask._id);
        await column.save();

        await logActivity(boardId, req.user._id, 'CREATE_TASK', `Task '${title}' was created in column '${column.name}'`);

        const io = req.app.get('socketio');
        io.to(boardId).emit('task-created', createdTask);

        res.status(201).json(createdTask);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


const getTasks = async (req, res) => {
    const { columnId } = req.params;
    const { search, assignedTo, dueDate, page = 1, limit = 10 } = req.query;

    try {
        let query = { column: columnId };

        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (assignedTo) {
            query.assignedTo = assignedTo;
        }
        if (dueDate) {
            query.dueDate = { $lte: new Date(dueDate) };
        }

        const tasks = await Task.find(query)
            .populate('assignedTo', 'name email')
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Task.countDocuments(query);

        res.json({ tasks, totalPages: Math.ceil(count / limit), currentPage: page });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateTask = async (req, res) => {
    const { title, description, assignedTo, dueDate } = req.body;
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.assignedTo = assignedTo || task.assignedTo;
        task.dueDate = dueDate || task.dueDate;

        const updatedTask = await task.save();

        const column = await Column.findById(task.column);
        await logActivity(column.board, req.user._id, 'UPDATE_TASK', `Task '${updatedTask.title}' was updated`);


        const io = req.app.get('socketio');
        io.to(column.board.toString()).emit('task-updated', updatedTask);

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const moveTask = async (req, res) => {
    const { newColumnId } = req.body;
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const oldColumnId = task.column;
        const oldColumn = await Column.findById(oldColumnId);
        const newColumn = await Column.findById(newColumnId);

        if (!newColumn || oldColumn.board.toString() !== newColumn.board.toString()) {
            return res.status(400).json({ message: 'Invalid move' });
        }


        await Column.updateOne({ _id: oldColumnId }, { $pull: { tasks: taskId } });

        await Column.updateOne({ _id: newColumnId }, { $push: { tasks: taskId } });

        task.column = newColumnId;
        await task.save();

        await logActivity(newColumn.board, req.user._id, 'MOVE_TASK', `Task '${task.title}' moved from '${oldColumn.name}' to '${newColumn.name}'`);

        const io = req.app.get('socketio');
        io.to(newColumn.board.toString()).emit('task-moved', { task, oldColumnId, newColumnId });

        res.json({ message: 'Task moved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteTask = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        const column = await Column.findById(task.column);
        await task.remove();

    
        await Column.updateOne({ _id: column._id }, { $pull: { tasks: taskId } });

        await logActivity(column.board, req.user._id, 'DELETE_TASK', `Task '${task.title}' was deleted`);


        const io = req.app.get('socketio');
        io.to(column.board.toString()).emit('task-deleted', { taskId, columnId: column._id });

        res.json({ message: 'Task removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { createTask, getTasks, updateTask, moveTask, deleteTask };
