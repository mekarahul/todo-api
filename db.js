const mysql = require('mysql');
const dbConfig = require('./config/dbConfig');
const util = require('util');
const { model } = require('mongoose');
var pool = mysql.createPool({
    connectionLimit:dbConfig.connection_limit,
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
}
);

pool.getConnection((err, connection) => {
    if(connection){
        console.log("connection established successfully")
    }else if(err){
        console.log(err);
        throw err;        
    }
    return
});

pool.query = util.promisify(pool.query).bind(pool);
module.exports= pool;