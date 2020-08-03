const db = require('../db');

const todo = (todo) => {
    this.descripton = todo.descripton;
}

todo.findAll = (result) => {
    todoSql = `SELECT * FROM todos`;
    db.query(todoSql, (err,data) => {
        if(err){
            result(err, err);
        }else{
            result(null, data);
        }
    });        
}

todo.Create = (newTodo, result) => {
    let newTodoSql = "INSERT INTO todos SET ?";
    db.query(newTodoSql, newTodo, (err,data) => {
        if(err){
            result(err, err);
        }else{
            result(null, {todo:data.insertId});
        }
    });
    
}

todo.Save = (todo, result) => {
    let updateTodoSql = 'UPDATE todos SET description = ? WHERE todos.id = ?';
    db.query(updateTodoSql, [todo.description, todo.id],(err, data) => {
        if(err){
            result(err, err);
        }else{
            result(null, data);
        }
    });
}
todo.Delete = (todo, result) => {
    let deleteTodoSql = 'DELETE FROM `todos` WHERE `todos`.`id` = '+todo;
    console.log(deleteTodoSql);
    db.query(deleteTodoSql,(err, data) => {
        if(err){
            result(err, err);
        }else{
            result(null, {deleted:todo});
        }
    });
}
module.exports = todo;