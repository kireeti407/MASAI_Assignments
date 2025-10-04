const express = require('express');
const router = express.Router({ mergeParams: true });
const { getBoardActivities } = require('../controllers/activity.controller');
const { protect } = require('../middlewares/auth.middleware');
const boardMember = require('../middlewares/boardAuth.middleware');

// Protect all activity routes
router.use(protect);
router.use(boardMember);

// @route   GET /api/boards/:boardId/activities
router.route('/').get(getBoardActivities);

module.exports = router;
