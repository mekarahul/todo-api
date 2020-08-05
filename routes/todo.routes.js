const express = require('express');
const router = express.Router();
const todo = require('../controllers/todo.controller');
router.get('/update', todo.update);
router.get('/', todo.findAll);
router.post('/', todo.create);
router.put('/:id', todo.save);
router.delete('/:id', todo.delete);
module.exports= router;