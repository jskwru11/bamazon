const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysecret',
    database: 'bamazon'
});

db.connect((error, message) => {
    if (error) throw error;
    console.log('dbase connected...');
});


module.exports = db;