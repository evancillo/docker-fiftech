const characterCtrl = require('./character.controller');
const express = require('express');
const router = express.Router();

router.get('/', characterCtrl.getList);

module.exports = router;