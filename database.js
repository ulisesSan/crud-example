const mysql = require('promise-mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'ulises',
    password: 'Solosoyyo12',
    database: 'recursos'
})

function getConnection(){
    return connection;
}
 
module.exports = { getConnection }