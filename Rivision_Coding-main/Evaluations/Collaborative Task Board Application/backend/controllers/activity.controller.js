const Activity = require('../models/activity.model');


const getBoardActivities = async (req, res) => {
    const { boardId } = req.params;

    try {
        const activities = await Activity.find({ board: boardId })
            .populate('user', 'name email')
            .sort({ timestamp: -1 }); 

        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getBoardActivities };
