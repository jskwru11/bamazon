const inquirer = require('inquirer');

const db = require('./database');


// TODO:  display all prodcuts

db.query(`SELECT * FROM products`, (error, results) => {
    if (error) throw error;
    results.map(item => {
        console.log(`${item.item_id}.)  Product: ${item.product_name}    Department: ${item.department_name}  Cost: ${item.price}   Quantity: ${item.stock_quantity}`);
        console.log(`______________________________________________________`);
    });
    db.end();
});

