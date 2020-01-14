const express = require('express');
const router = express.Router({mergeParams: true});
const userController = require('./user.controller');


// POST new user
router.post('/', userController.createUser);

// UPDATE user
router.put('/', userController.updateUser);

// GET
router.get('/:id', userController.getUser);

// DELETE user
router.delete('/', userController.deleteUser);
module.exports = router;