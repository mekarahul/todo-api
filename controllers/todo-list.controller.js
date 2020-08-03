const todoList = require('../models/todo-list.model');
exports.findAll = async (req, res)=>{
     await todoList.FindAll((err, data) => {
        res.send(data);
    });
}
exports.create = async (req, res) => {
    if(req.body.list !== null && req.body.list != undefined){
        let newList = req.body.list;
         await todoList.Create(newList, (err, data)=>{
            res.status(201).send({listId: data});
        });
    }else{
        res.send(500);
    }

}

exports.findById = async (req, res) => {
    if(req.params.id !== null && req.params.id != undefined){        
         await todoList.FindById(req.params.id, (err, data)=>{
            res.status(200).send(data);
        });
    }else{
        res.send(500);
    }
}
exports.save = (req, res) => {
    let updateListId = req.params.id;
    if(updateListId != null && updateListId != undefined){
        let updateList = req.body.updateList;
        todoList.Save(updateList, (err, data)=>{
            res.send(data)
        })
    }else{
        res.send(500);
    }
}
exports.delete = (req, res) => {
    let listId = req.params.id;
    if(listId != null && listId != undefined){
        todoList.Delete(listId, (err, data) => {
            res.send(data)
        })
    }
}