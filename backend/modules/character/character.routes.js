const characterCtrl = require('./character.controller');
const express = require('express');
const router = express.Router();
const auth = require('../auth/auth.controller');


router.get('/', auth.verifyToken, characterCtrl.getList);

router.get('/graphql/', auth.verifyToken ,characterCtrl.getListGraphql);

module.exports = router;