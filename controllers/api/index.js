const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const replyRoutes = require('./replyRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/replies', replyRoutes);

module.exports = router;