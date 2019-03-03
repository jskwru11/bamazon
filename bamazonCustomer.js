const inquirer = require('inquirer');
const db = require('./database');



//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.
const start = () => {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the ID of the product you would like to buy?',
        name: 'productID'
    }, {
        type: 'input',
        message: 'How much quantity would you like to buy??',
        name: 'productQuantity'
    }]).then((result) => {
        db.query(`SELECT * from products WHERE item_id=${result.productID}`, (error, buyResult) => {
            if (error) throw error;
            const productData = buyResult;
            buyResult.map(item => {
                if (item.stock_quantity < result.productQuantity) {
                    console.log(`Insufficient quantity!`);
                    start()
                } else {
                    const sql = `UPDATE products SET stock_quantity=${item.stock_quantity - result.productQuantity} WHERE item_id=${result.productID}`
                    db.query(sql, (error, shoppingResult) => {
                        if (error) throw error;
                        const total = item.price * result.productQuantity;
                        console.log(`Your order has been placed.  Your total is: $ ${total}`);
                        start();
                    });
                }
            });

        })
        console.log(result);
    });
};

start();