const express = require('express');

const { InfoController } = require('../../controllers');
const userRouter = require('./user-routes');
const { AuthRequestMiddlewares } = require('../../middlewares');

const router = express.Router();

router.get('/info',AuthRequestMiddlewares.checkAuth ,InfoController.info);
router.use('/user', userRouter);

module.exports = router;