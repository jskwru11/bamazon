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

const addProduct = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'Enter Product Name: ',
        name: 'product_name'
    },{
        type: 'input',
        message: 'Enter Department Name: ',
        name: 'department_name'
    },{
        type: 'input',
        message: 'Enter Product Price: ',
        name: 'price'
    },{
        type: 'input',
        message: 'Enter Product Quantity: ',
        name: 'stock_quantity'
    }]).then(newProduct => {
        const sql = `INSERT INTO products SET ?`;
        db.query(sql, newProduct, (error, results) => {
            if(error) throw error;
            console.log(`New Product Added Successfully`);
        });
    });
};

const addInventory = () => {
    const sql = `SELECT * FROM products`;
    return new Promise((resolve, reject) => {
        db.query(sql, (error, Results) => {
            if (error) throw error;
            resolve(Results);
        });
    })

};

module.exports = {
    getCatalog: getCatalog,
    getLowInventory: getLowInventory,
    addProduct: addProduct,
    addInventory: addInventory
};



