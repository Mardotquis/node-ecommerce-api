-- create database duragsrus;

-- use duragsrus;

-- -- show tables;

-- create table products(
--     product_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
--     product_name VARCHAR(50) NOT NULL,
--     product_description VARCHAR(200) NOT NULL,
--     product_price DECIMAL(4,2) NOT NULL,
--     product_img VARCHAR(255) NOT NULL,
--     product_availability CHAR(1) NOT NULL DEFAULT "Y"
-- )

-- -- INSERT INTO products(product_name, product_description, product_price, product_img, product_availability )
-- -- VALUES("Test Durag", "Testing this out. This is the first product", 29.99, "google.com", "Y"),
-- -- ("Test Durag", "Testing this out. This is the second product", 99.99, "yahoo.com", "N");

-- -- INSERT INTO products(product_name, product_description, product_type ,product_price, product_img, product_availability )
-- -- VALUES("Baby Blue APE Durag", "Easy. Breezy. Beautiful ... Silky","durags",29.99,"images/rags/1durags.jpg", "Y");
-- -- {
--     --     "productId": 1,
--     --     "title": "Baby Blue APE Durag",
--     --     "description": "Easy. Breezy. Beautiful ... Silky",
--     --     "price": 29.99,
--     --     "productType": "durags",
--     --     "productCategory": "designer",
--     --     "productImages": "images/rags/1durags.jpg",
--     --     "availability": "In Stock",
--     --     "color": [
--     --         "blue",
--     --         "black"
--     --     ]
--     -- }

--     INSERT INTO products(product_name, product_description, product_type ,product_price, product_img, product_availability )
-- VALUES();

CREATE TABLE IF NOT EXISTS products (
    `productId` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(50) CHARACTER SET utf8,
    `product_description` VARCHAR(250) CHARACTER SET utf8,
    `price` DECIMAL(4, 2),
    `productType` VARCHAR(10) CHARACTER SET utf8,
    `productCategory` VARCHAR(15) CHARACTER SET utf8,
    `productImages` VARCHAR(250) CHARACTER SET utf8,
    `availability` CHAR(1) CHARACTER SET utf8
);
INSERT INTO products (productId, title, product_description, price, productType, productCategory, productImages, availability)

VALUES
    ('Baby Blue APE Durag','Easy. Breezy. Beautiful ... Silky',29.99,'durags','designer','images/rags/1durags.jpg','In Stock'),
(
    'Pink APE Durag','Easy. Breezy. Beautiful ... Silky',29.99,'durags','designer','images/rags/21durags.jpg','In Stock'),
(
    'CC White Durag','Easy. Breezy. Beautiful ... Silky',24.99,'durags','brand','images/ccwhite.jpeg','In Stock'),
(
    'Tiger Durag','Easy. Breezy. Beautiful ... Silky',26.99,'durags','designer','images/tiger.jpg','In Stock'),
(

    'Louie Durag','Easy. Breezy. Beautiful ... Silky',29.99,'durags','brand','images/louie.png','In Stock'),
(
    'Givenchy Durag','Easy. Breezy. Beautiful ... Silky',35.99,'durags','brand','images/colorful.jpg','In Stock'),
(
    'Balenciaga Shorts','Trunks!',45.99,'shorts','brand','images/balenciblack.jpg','In Stock'),
(
    'Three Fifty Shorts','Trunks!',79.99,'shorts','brand','images/threefifty.jpg','In Stock'),
(
    'Sevenhundred Shorts','Trunks!',79.99,'shorts','brand','images/sevenhun.jpg','In Stock'),
(
    'Louie x Supreme Shorts','Trunks!',99.99,'shorts','limited edition','images/sup.jpg','In Stock'),
(
    'Go Split Shorts','Trunks!',45.99,'shorts','designer','images/gosplit.jpg','In Stock'),
(
    'Play Polka Dot','Trunks!',19.99,'shorts','limited edition','images/play.jpg','In Stock');




INSERT INTO duragsrus_products (title, description, price, productType, productCategory, productImages, availability)

VALUES
    ('Baby Blue APE Durag','Easy. Breezy. Beautiful ... Silky',29.99,'durags','designer','images/rags/1durags.jpg',"Y"),
(
    'Pink APE Durag','Easy. Breezy. Beautiful ... Silky',29.99,'durags','designer','images/rags/21durags.jpg',"Y"),
(
    'CC White Durag','Easy. Breezy. Beautiful ... Silky',24.99,'durags','brand','images/ccwhite.jpeg',"Y"),
(
    'Tiger Durag','Easy. Breezy. Beautiful ... Silky',26.99,'durags','designer','images/tiger.jpg',"Y"),
(

    'Louie Durag','Easy. Breezy. Beautiful ... Silky',29.99,'durags','brand','images/louie.png',"Y"),
(
    'Givenchy Durag','Easy. Breezy. Beautiful ... Silky',35.99,'durags','brand','images/colorful.jpg',"Y"),
(
    'Balenciaga Shorts','Trunks!',45.99,'shorts','brand','images/balenciblack.jpg',"Y"),
(
    'Three Fifty Shorts','Trunks!',79.99,'shorts','brand','images/threefifty.jpg',"Y"),
(
    'Sevenhundred Shorts','Trunks!',79.99,'shorts','brand','images/sevenhun.jpg',"Y"),
(
    'Louie x Supreme Shorts','Trunks!',99.99,'shorts','limited edition','images/sup.jpg',"Y"),
(
    'Go Split Shorts','Trunks!',45.99,'shorts','designer','images/gosplit.jpg',"Y"),
(
    'Play Polka Dot','Trunks!',19.99,'shorts','limited edition','images/play.jpg',"Y");
