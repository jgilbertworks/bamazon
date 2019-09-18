# bamazon

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

3. Add to Inventory

4. Add New Product

![menu](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.10.32%20PM.png?raw=true "menu")

If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.

If a manager selects Add to Inventory, your app should display a prompt that will let the manager “add more” of any item currently in the store.

![update](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.11.07%20PM.png?raw=true "update")

If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

![add](https://github.com/jgilbertworks/bamazon/blob/master/assets/images/Screen%20Shot%202019-09-17%20at%206.12.01%20PM.png?raw=true "add")
   
Do not overwrite your file each time you run a command.

### Technologies
Back-End
- [ ] JavaScript
- [ ] Node.js
- [ ] NPM Packages
- [ ] Spotify API
- [ ] Twitter API


### Setup 
```
1. git clone https://github.com/jgilbertworks/liribot.git
2. cd liribot
3. npm install 
4. node liri.js spotify-this-song '<song name here>'
5. node liri.js movie-this '<movie name here>'
6. node liri.js my-tweets
7. node liri.js do-what-it-says
8. Review results in the log.txt file or console

```
### Requirements

- Must sign up for developer accouts for Twitter and Spotify to recieve API Keys.
