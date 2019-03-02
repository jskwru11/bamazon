
const db = require('./database');


const data = [{
    product_name: 'Nintendo Switch',
    department_name: 'Gaming',
    price: 299.99,
    stock_quantity: 10
},{
    product_name: 'Titleist glove',
    department_name: 'Golf',
    price: 19.99,
    stock_quantity: 25
},{
    product_name: 'Apple Watch 4',
    department_name: 'Electronics',
    price: 499.99,
    stock_quantity: 8
},{
    product_name: 'Apple Air Pods',
    department_name: 'Electronics',
    price: 150.99,
    stock_quantity: 15
},{
    product_name: 'Under Armor Socks',
    department_name: 'Clothing',
    price: 14.99,
    stock_quantity: 20
},{
    product_name: 'Smoke Hollow 3616DEWS 36inch Electric Smoker',
    department_name: 'Grills & Outdoors',
    price: 249.99,
    stock_quantity: 12
},{
    product_name: 'Samsung 34inch Curved Monitor',
    department_name: 'Computers & Accessories',
    price: 799.99,
    stock_quantity: 3
},{
    product_name: 'Anker Quick Charge 3.0',
    department_name: 'Electronics',
    price: 17.99,
    stock_quantity: 30
},{
    product_name: 'JBL Flip 4 Bluetooth Speaker',
    department_name: 'Portable Speakers & Docks',
    price: 73.00,
    stock_quantity: 17
}]
const sql = `INSERT INTO products SET ?`
data.map(item => {
    db.query(sql, item, (error, results) => {
        if (error) throw error;
        console.log('records inserted...')
    })
});