const express = require('express');
const router = express.Router({ mergeParams: true });
const { getBoardActivities } = require('../controllers/activity.controller');
const { protect } = require('../middlewares/auth.middleware');
const boardMember = require('../middlewares/boardAuth.middleware');


router.use(protect);
router.use(boardMember);

router.route('/').get(getBoardActivities);

module.exports = router;
