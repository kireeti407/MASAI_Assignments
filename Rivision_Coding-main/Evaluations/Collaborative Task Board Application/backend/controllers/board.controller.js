const Board = require('../models/board.model');
const User = require('../models/user.model');
const Column = require('../models/column.model');
const Activity = require('../models/activity.model');

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

const createBoard = async (req, res) => {
    const { name, description } = req.body;

    try {
        const board = new Board({
            name,
            description,
            creator: req.user._id,
            members: [req.user._id] 
        });

        const createdBoard = await board.save();

        const defaultColumns = ['Todo', 'In Progress', 'Done'];
        const createdColumns = await Promise.all(defaultColumns.map(colName => 
            Column.create({ name: colName, board: createdBoard._id })
        ));

        createdBoard.columns = createdColumns.map(col => col._id);
        await createdBoard.save();

        await logActivity(createdBoard._id, req.user._id, 'CREATE_BOARD', `Board '${name}' was created`);

        res.status(201).json(createdBoard);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all boards for a user
// @route   GET /api/boards
// @access  Private
const getUserBoards = async (req, res) => {
    try {
        const boards = await Board.find({ members: req.user._id });
        res.json(boards);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get board by ID
// @route   GET /api/boards/:id
// @access  Private
const getBoardById = async (req, res) => {
    try {
        const board = await Board.findById(req.params.id).populate('columns').populate('members', 'name email');
        if (board) {
            res.json(board);
        } else {
            res.status(404).json({ message: 'Board not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Delete a board
// @route   DELETE /api/boards/:id
// @access  Private/Admin
const deleteBoard = async (req, res) => {
    try {
        const board = await Board.findById(req.params.id);

        if (!board) {
            return res.status(404).json({ message: 'Board not found' });
        }

        // Check if the user is the creator (Admin)
        if (board.creator.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized to delete this board' });
        }

        await board.remove();
        // Also remove associated columns, tasks, and activities
        await Column.deleteMany({ board: req.params.id });
        // You might need a more robust cascade delete for tasks within those columns

        res.json({ message: 'Board removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Invite a user to a board
// @route   POST /api/boards/:id/invite
// @access  Private/Admin
const inviteUserToBoard = async (req, res) => {
    const { email } = req.body;

    try {
        const board = await Board.findById(req.params.id);
        if (!board) {
            return res.status(404).json({ message: 'Board not found' });
        }

        const userToInvite = await User.findOne({ email });
        if (!userToInvite) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (board.members.includes(userToInvite._id)) {
            return res.status(400).json({ message: 'User is already a member of this board' });
        }

        board.members.push(userToInvite._id);
        await board.save();

        await logActivity(board._id, req.user._id, 'INVITE_USER', `User '${userToInvite.name}' was invited to the board`);

        res.json(board.members);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createBoard, getUserBoards, getBoardById, deleteBoard, inviteUserToBoard };
