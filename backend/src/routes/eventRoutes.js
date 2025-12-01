const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEventById, registerForEvent, registerPublic } = require('../controllers/eventController');
const { protect, authorize } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', getEvents);
router.get('/:id', getEventById);

router.post('/', protect, authorize('ORGANIZER', 'ADMIN', 'FACULTY'), upload.single('banner'), createEvent);
router.post('/:id/register', protect, registerForEvent);
router.post('/:id/register-public', registerPublic);

module.exports = router;
