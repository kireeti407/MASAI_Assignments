const express = require('express');
// We need to merge params to access boardId from the parent router
const router = express.Router({ mergeParams: true }); 
const {
    createTask,
    getTasks,
    updateTask,
    moveTask,
    deleteTask
} = require('../controllers/task.controller');
const { protect } = require('../middlewares/auth.middleware');
const boardMember = require('../middlewares/boardAuth.middleware');



router.use(protect);
router.use(boardMember); // Ensure user is a member of the board for all task operations

// Create a task in a specific board
router.route('/').post(createTask);

// Get tasks for a specific column in a board
router.route('/columns/:columnId/tasks').get(getTasks);

// Operations on a specific task
router.route('/:taskId')
    .put(updateTask)
    .delete(deleteTask);

// Move a task
router.route('/:taskId/move').put(moveTask);

module.exports = router;
