const inquirer = require('inquirer');
const db = require('./database');

/*
  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product
*/

const start = () => {
    inquirer.prompt([{
        type: 'list',
        choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
        name: 'managerSelection'
    }]).then(result => {
        const choice = result;
        switch (choice.managerSelection) {
            case 'View Products for Sale':
                const sql = `SELECT * FROM products`;
                db.query(sql, (error, productResults) => {
                    productResults.map(item => console.log(item));
                })
        }
    });
};

start();