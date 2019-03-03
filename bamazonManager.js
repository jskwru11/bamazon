const inquirer = require('inquirer');
const db = require('./database');
const {getCatalog, getLowInventory, addProduct, addInventory} = require('./bamazon');

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
                getCatalog();
                start();
                break;
            case 'View Low Inventory':
                getLowInventory();
                start();
                break;
            case 'Add to Inventory':
                addInventory().then(items => {
                    inquirer.prompt([{
                        type: 'rawlist',
                        message: 'Select an item to add more quantity.',
                        choices: items.map(item => item.product_name),
                        name: 'inventory'
                    }]).then(selection => {
                        inquirer.prompt([{
                            type: 'input',
                            message: 'Quantity number to add: ',
                            name: 'amount'
                        }]).then(addedQuantity => {
                            const itemAmount = items.filter(item => item.product_name === selection.inventory);
                            const sql = `UPDATE products SET stock_quantity=${parseInt(itemAmount[0].stock_quantity) + parseInt(addedQuantity.amount)} WHERE product_name="${selection.inventory}"`
                            db.query(sql, (error, updateResults) => {
                                if (error) throw error;
                                console.log(`Added Quantity sucessfully`);
                                start();
                            })
                        })
                    });
                });
                // start();
                break;
            case 'Add New Product':
                addProduct();
                start();
                break;
            default:
                start();
                break;
        }
    });
};

start();