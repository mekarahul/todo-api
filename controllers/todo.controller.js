const todo = require('../models/todo.model');
const todoList = require('../models/todo-list.model');
exports.findAll = (req, res)=>{
    todo.findAll((err, data) => {
        res.send(data);
    });
}
exports.create = (req, res) => {
    if(req.body.newTodo != null || undefined){
        let newTodo = req.body.newTodo;
        todo.Create(newTodo,(err, data)=>{
            res.status(201).send({newTodo:data});
        });
    }    
}
exports.findById = (req, res) =>{
    
}

exports.save = (req, res) => {
    let todoToUpdate = req.params.id;
    if(todoToUpdate != null && todoToUpdate != undefined){
        let todoUpdate = req.body.updateTodo;
         todo.Save(todoUpdate, (err, data)=>{
            res.send(data)
        })
    }
}

exports.delete = (req, res) => {
    let todoToUpdate = req.params.id;
    if(todoToUpdate != null && todoToUpdate != undefined){
        todo.Delete(todoToUpdate, (err, data) => {
            res.send(data)
        })
    }
}