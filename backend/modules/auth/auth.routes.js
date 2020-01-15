const express = require('express');
const router = express.Router({mergeParams: true});
const authController = require('./auth.controller');

router.post('/', authController.authenticate);

module.exports = router;