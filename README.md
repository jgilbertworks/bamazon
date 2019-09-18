## bamazon

## Table of Contents 

## Objective 

# Overview

In this activity, you’ll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will
take in orders from customers and deplete stock from the store’s inventory. As a bonus task, you can program your app to
track product sales across your store’s departments and then provide a summary of the highest-grossing departments in the 
store.

# Challenge #1: Customer View 

Create a MySQL Database called bamazon. Then create a Table inside of that database called products.

The products table should have each of the following columns:

1. item_id (unique id for each product)

2. product_name (Name of product)

3. department_name

4. price (cost to customer)

5. stock_quantity (how much of the product is available in stores)

Populate this database with around 10 different products. (i.e. Insert “mock” data rows into this database and table).

![sql](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.03.47%20PM.png?raw=true "sql")

Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

The app should then prompt users with two messages.

The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.
Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer’s request.

![table](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.07.38%20PM.png?raw=true "table")

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer’s order.

This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.

![error](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.08.53%20PM.png?raw=true "error")

# Challenge #2: Manager View (Next Level)

Create a new Node application called bamazonManager.js. Running this application will:

List a set of menu options:

1. View Products for Sale

2. View Low Inventory

3. Add to Inventory // Still in progress //

4. Add New Product

![menu](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.10.32%20PM.png?raw=true "menu")

If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.

If a manager selects Add to Inventory, your app should display a prompt that will let the manager “add more” of any item currently in the store.

![update](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.11.07%20PM.png?raw=true "update")

If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

![add](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.12.01%20PM.png?raw=true "add")
   
Do not overwrite your file each time you run a command.

# Challenge #3: Supervisor View (Final Level) // Still in progress

Create a new MySQL table called departments. Your table should include the following columns:

1. department_id

2. department_name

3. over_head_costs (A dummy number you set for each department)

Modify the products table so that there’s a product_sales column, and modify your bamazonCustomer.js app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased is added to the product’s product_sales column.

Make sure your app still updates the inventory listed in the products column.
Create another Node app called bamazonSupervisor.js. Running this application will list a set of menu options:

1. View Product Sales by Department

2. Create New Department

When a supervisor selects View Product Sales by Department, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

department_id	department_name	over_head_costs	product_sales	total_profit
01	Electronics	10000	20000	10000
02	Clothing	60000	100000 40000

The total_profit column should be calculated on the fly using the difference between over_head_costs and product_sales. total_profit should not be stored in any database. You should use a custom alias.

If you can’t get the table to display properly after a few hours, then feel free to go back and just add total_profit to the departments table.

Hint: You may need to look into aliases in MySQL.

Hint: You may need to look into GROUP BYs.

Hint: You may need to look into JOINS.

HINT: There may be an NPM package that can log the table to the console. What’s is it? Good question :)

### Technologies
Back-End
- [ ] JavaScript
- [ ] Node.js
- [ ] NPM Packages
- [ ] MySQL


### Setup 
```
1. git clone https://github.com/jgilbertworks/bamazon
2. cd bamazon
3. npm install 
4. node bamazon.js or node bamazonManager.js
```
### Requirements

- Must instal node packages.
