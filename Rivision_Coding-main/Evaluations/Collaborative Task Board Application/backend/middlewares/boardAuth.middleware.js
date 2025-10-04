const Board = require('../models/board.model');

const boardMember = async (req, res, next) => {
    try {
        const board = await Board.findById(req.params.id);

        if (!board) {
            return res.status(404).json({ message: 'Board not found' });
        }

        if (!board.members.includes(req.user._id)) {
            return res.status(403).json({ message: 'Access denied. You are not a member of this board.' });
        }

        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = boardMember;
