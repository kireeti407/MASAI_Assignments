const express = require('express');
const router = express.Router();
const { 
    createBoard, 
    getUserBoards, 
    getBoardById, 
    deleteBoard, 
    inviteUserToBoard 
} = require('../controllers/board.controller');
const { protect, admin } = require('../middlewares/auth.middleware');
const boardMember = require('../middlewares/boardAuth.middleware');

// @route   /api/boards
router.route('/')
    .post(protect, admin, createBoard) // Only Admins can create boards
    .get(protect, getUserBoards); // Get boards for the logged-in user

// @route   /api/boards/:id
router.route('/:id')
    .get(protect, boardMember, getBoardById) // Only board members can see the board
    .delete(protect, admin, deleteBoard); // Only Admins can delete boards

// @route   /api/boards/:id/invite
router.route('/:id/invite')
    .post(protect, admin, inviteUserToBoard); // Only Admins can invite

module.exports = router;
