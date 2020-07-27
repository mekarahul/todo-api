const todo = require('../models/todo.model');
exports.findAll = (req, res)=>{
    todo.findAll((err, data) => {
        res.send(data);
    });
}
