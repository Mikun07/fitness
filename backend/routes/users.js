const express = require('express');
const router = express.Router();
let userController = require('../controller/userController');

router.get('/', userController.getUsers);
router.post('/add', userController.addUser);

module.exports = router