const express = require('express');
const router = express.Router();
const { addUser, getUsers } = require('../controllers/users.js')

router.get('/users/', getUsers);

router.post('/user/', addUser);

module.exports = router;