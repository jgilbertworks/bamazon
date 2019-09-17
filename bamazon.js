const mysql = require("mysql");
const inquirer = require("inquirer");
const keys = require('./keys.js');

// create connection to sql database

const connection = mysql.createConnection({
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
                'Shop',
                'Exit'
            ]
        }).then(function (answer) {
            if (answer.action === 'Shop') {
                start();
            } else {
                connection.end();
            }
        })
}

// create function to start shopping 
//prints the items for sale and their details
function start() {
    connection.query('SELECT * FROM Products', function (err, res) {
        if (err) throw err;
        console.log('\r\n');
        console.log('________________________________ Welcome to Bamazon ____________________________');
        console.table(res);
        runSearch();
    })
};

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

                    let stockQuantity = res[index].stock_quantity;

                    let stockLeft = stockQuantity - userQuantity;

                    let price = res[index].price;

                    let totalPrice = res[index].price * userQuantity;

                    let itemReturn = userQuantity + stockLeft;

                    console.log('\r\n');

                    ///logic
                    if (userQuantity > stockQuantity) {
                        console.log('Sorry, your order cannot be completed. Please select an available quantity from our stock')
                    } else {
                        console.table(`You selected ${userQuantity} units of item Id # ${product} at $${price} each`);
                        console.log(`There are ${stockLeft} units left of product Id # ${product}`);
                        console.log(`$${totalPrice} has been added to your cart`);
                        console.log('\r\n');

                        connection.query('UPDATE products SET stock_quantity =? WHERE item_id =?', [stockLeft, answer.id], function (err, res) {
                            // console.log(res);//console.logs system update
                            console.log('\r\n');
                        });

                        console.log('\r\n');

                        function keepShopping() {
                            inquirer
                                .prompt([{
                                    name: 'question',
                                    type: 'list',
                                    message: 'What would you like to do?',
                                    choices: [
                                        'Continue Shopping',
                                        'Proceed to Checkout',
                                        'Cancel Order'
                                    ]
                                }]).then(function (answer) {
                                    if (answer.question == 'Continue Shopping') {
                                        start();
                                        // runSearch();
                                    } else

                                    if (answer.question == 'Proceed to Checkout') {
                                        checkOut();
                                    } else {
                                        updateDB();
                                        // connection.end();
                                    }
                                });

                            function checkOut() {
                                console.log('Checkout is unavailable.');
                                connection.end();
                            }

                            function updateDB() {
                                connection.query('UPDATE products SET stock_quantity =? WHERE item_id =?', [itemReturn, answer.id], function (err, res) {
                                    // console.log(res);//console.logs system update
                                    console.log('\r\n');
                                    console.log('Inventory returned')
                                    connection.end();
                                });
                            }

                        }
                    }

                }
                keepShopping();
            });
        });
}