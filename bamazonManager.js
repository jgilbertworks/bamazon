let mysql = require("mysql");
let inquirer = require("inquirer");
var keys = require('./keys.js');

// create connection to sql database
let connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: keys,
    database: "bamazon_db"
});

//  create function to throw error - run menu function
connection.connect(function (err) {
    if (err) throw err;
    menu();
});

// menu function prompts user to shop or exit
function menu() {
    inquirer
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View Inventory',
                'Update Inventory',
                'Add Product',
                'Exit'
            ]
        }).then(function (answer) {
            if (answer.action === 'Update Inventory') {
                start();
            } else
            if (answer.action === 'Add Product') {
                addProduct();
            } else
            if (answer.action === 'View Inventory') {
                connection.query('SELECT * FROM Products', function (err, res) {
                    if (err) throw err;
                    console.log('\r\n');
                    console.log('________________________________ Bamazon Inventory ____________________________');
                    console.table(res);
                    console.log('\r\n');
                    menu();
                });
            } else {
                connection.end();
            }
        });
}
// create function to start shopping 
//prints the items for sale and their details
function start() {
    connection.query('SELECT * FROM Products', function (err, res) {
        if (err) throw err;
        console.log('\r\n');
        console.log('________________________________ Bamazon Inventory ____________________________');
        console.table(res);
        runSearch();
    });
};

function addProduct() {
    inquirer
        .prompt([{
                name: 'product_name',
                type: 'input',
                message: 'Input an item name',
            },
            {
                name: 'department_name',
                type: 'input',
                message: 'What is the department?',
            },
            {
                name: 'price',
                type: 'number',
                message: 'What is the retail price?'
            },
            {
                name: 'stock_quantity',
                type: 'input',
                message: 'Input unit quantity'
            }
        ]).then(function (answer) {

            // declare variables
            let newProduct = (answer.product_name);
            newProduct = newProduct.toLowerCase();
            let department = (answer.department_name);
            department = department.toLowerCase();
            let price = parseFloat(answer.price);
            price = price.toFixed(2);
            let newQuantity = parseInt(answer.stock_quantity);

            if (newQuantity >= 100 || newQuantity <= 0) {
                console.log(`ERR: Max inventory cannot exceed 99 units. Please add an appropriate number of units.`);
            } else
            if (isNaN(newQuantity)) {
                console.log('ERR: Insufficient quantity. Please add an appropriate number of units');
            } else {
                update = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('" + newProduct + "', '" + department + "', " + price + ",  " + newQuantity + ")";
                connection.query(update, function (err, res) {
                    if (err) throw err;
                    // console.log(res); // console logs the system updates
                    console.log('\r\n');
                    console.log('Inventory updated');
                    console.log(`You added ${newQuantity} units of ${newProduct} at ${price} each.`);
                    console.log('\r\n');
                    menu();
                });
            }
        });
}
// create runSearch function to ask user for item id and item quantity
function runSearch() {
    inquirer
        .prompt([{
                name: 'id',
                type: 'number',
                message: 'Input an item id',
            },
            {
                name: 'quantity',
                type: 'number',
                message: 'How many?',
            }
        ]).then(function (answer) {

            let product = parseInt(answer.id);

            let userQuantity = parseInt(answer.quantity);

            let query = 'SELECT item_id,product_name,department_name,price,stock_quantity FROM products WHERE ?';
            connection.query(query, {
                item_id: answer.id
            }, function (err, res) {
                for (let index = 0; index < res.length; index++) {

                    // current stock amount
                    let stockQuantity = res[index].stock_quantity;

                    // updated stock
                    let stockUpdated = stockQuantity + userQuantity;

                    console.log('\r\n');

                    ///logic
                    if (stockUpdated >= 100) {
                        console.log(`ERR: Max inventory cannot exceed 99 units. Please add an appropriate number of units for item #${product}.`);
                        menu();
                    } else {
                        console.table(`You added ${userQuantity} units of item Id # ${product}`);
                        console.log(`There are ${stockUpdated} units of product Id # ${product} `);
                        // console.log(`$${totalPrice} has been added to your cart`);
                        console.log('\r\n');

                        connection.query('UPDATE products SET stock_quantity =? WHERE item_id =?', [stockUpdated, answer.id], function (err, res) {
                            // console.log(res);//console.logs system update
                            console.log('\r\n');
                            menu();
                        });
                    }
                }
            });
        });
}
