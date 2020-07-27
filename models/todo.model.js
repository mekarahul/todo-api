const db = require('../db');
const todo = (todo) => {
    this.descripton = todo.descripton;
    this.userId = todo.descripton;
}
todo.findAll = async (result) => {
    todoSql = `SELECT * FROM todos`;
    let todos = await db.query(todoSql)
    result(null, todos);    
}
module.exports = todo;