const db = require('../db');
const todoList = (list) => {
    this.title = list.title;
}
todoList.FindAll = async (result) => {
    let todoListSql = `SELECT * FROM todo_list`;
    let list = await db.query(todoListSql);
    let todos = list.map(async (item) => {
        let todoSqlByList = `SELECT * FROM todos WHERE listId = ${item.id}`;
        let task = await db.query(todoSqlByList);
        item.todos = task;
    });
    await Promise.all(todos);
    console.log("todoList", todoList);
    result(null, list);
}
todoList.Create = async (newList, result) => {
    let newlistSql = "INSERT INTO todo_list SET ?";
    let newListId = await db.query(newlistSql, newList);
    result(null, newListId.insertId);
}
todoList.FindById = async (id, result) => {
    let todoListSql = `SELECT * FROM todo_list WHERE id = ${id}`;
    let list = await db.query(todoListSql);
    result(null, list[0]);
}
todoList.Save = async (updateList, result) => {
    let updateTodoSql = 'UPDATE todo_list SET title = ? WHERE todo_list.id = ?';
    db.query(updateTodoSql, [updateList.title, updateList.id], (err, data) => {
        if (err) {
            result(err, err);
        } else {
            result(null, data);
        }
    });
}
todoList.Delete = (listId, result) => {
    let deleteListSql = `DELETE FROM todo_list WHERE todo_list.id = ${listId}`;
    db.query(deleteListSql, (err, data) => {
        if (err) {
            result(err, err);
        } else {
            let deleteTodoSql = 'DELETE FROM `todos` WHERE `todos`.`listId` = ' + listId;
            db.query(deleteTodoSql, (err, data) => {
                if (err) {
                    result(err, err);
                } else {
                    result(null, { deleted: data });
                }
            });
        }
    });
}
todoList.FindByTitle = (title, result) => {
    let titleSql = 'SELECT count(*) as numRecords FROM todo_list WHERE title ='+`'${title}'`;
    db.query(titleSql, (err,data)=>{
        if(err){
            result(err, err)
        }else{
            if(data[0].numRecords > 0){
                result(null, true);
            }else{
                result(null, false);
            }
            
        }
    });
}
module.exports = todoList;