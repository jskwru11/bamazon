const inquirer = require('inquirer');
const db = require('./database');
const {getCatalog, getLowInventory} = require('./bamazon');

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
            default:
                console.log('hey');
                break;
        }
    });
};

start();