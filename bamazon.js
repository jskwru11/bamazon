const inquirer = require('inquirer');

const db = require('./database');


// TODO:  display all prodcuts

const getCatalog = () => {
    db.query(`SELECT * FROM products`, (error, results) => {
        if (error) throw error;
        results.map(item => {
            console.log(`\n`);
            console.log(`${item.item_id}.)  Product: ${item.product_name}    Department: ${item.department_name}  Cost: ${item.price}   Quantity: ${item.stock_quantity}`);
            console.log(`______________________________________________________`);
        });
        // db.end();
    });
};

const getLowInventory = () => {
    db.query(`SELECT * FROM products WHERE stock_quantity<5`, (error, results) => {
        if (error) throw error;
        results.map(item => {
            console.log(`\n`);
            console.log(`${item.item_id}.)  Product: ${item.product_name}    Department: ${item.department_name}  Cost: ${item.price}   Quantity: ${item.stock_quantity}`);
            console.log(`______________________________________________________`);
        });
        // db.end();
    });
};

module.exports = {
    getCatalog: getCatalog,
    getLowInventory: getLowInventory
};



