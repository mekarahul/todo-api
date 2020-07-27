const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo.controller');
router.get('/', todo.findAll);
module.exports= router;