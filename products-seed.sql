
-- create bamazon database
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

-- select bamazon database
USE bamazon_db;

-- create products table
CREATE TABLE products (
item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(250) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price FLOAT(10, 2) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
PRIMARY KEY (item_id)
);

