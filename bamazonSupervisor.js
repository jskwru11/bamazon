const inquirer = require('inquirer');
const table = require('console.table');

const db = require('./database');



const start = () => {
    inquirer.prompt([{
        type: 'list',
        choices: ['View Product Sales by Department', 'Exit'],
        name: 'supChoice'
    }]).then(supResults => {
        if (supResults.supChoice === 'View Product Sales by Department') {
            const sql = `SELECT departments.department_id, departments.department_name, departments.over_head_costs, products.product_sales, products.product_sales - departments.over_head_costs AS total_profit  from departments INNER JOIN products ON products.department_name = departments.department_name`;
            db.query(sql, (error, sucessResults) => {
                if (error) throw error;
                // sucessResults.map(column => {
    
                //     table.push(column);
                // });
                console.table(sucessResults);
                start();
            });
        } else {
            process.exit();
        }

        
    })
};

start();