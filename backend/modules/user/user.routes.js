const express = require('express');
const router = express.Router({mergeParams: true});
const userController = require('./user.controller');


// POST new user
router.post('/', userController.createUser);

module.exports = router;