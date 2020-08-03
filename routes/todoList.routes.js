const express = require('express');
const router = express.Router();
const todoList = require('../controllers/todo-list.controller');
router.get('/', todoList.findAll);
router.post('/', todoList.create);
router.get('/:id', todoList.findById);
router.put('/:id', todoList.save);
router.delete('/:id', todoList.delete);
module.exports= router;