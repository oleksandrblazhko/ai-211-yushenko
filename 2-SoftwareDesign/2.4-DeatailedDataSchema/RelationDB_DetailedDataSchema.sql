CREATE TABLE User (
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (login),
    CHECK (login REGEXP '^[a-zA-Z0-9_]+$' AND LENGTH(login) <= 255),
    CHECK (password REGEXP '^[a-zA-Z0-9_]+$' AND LENGTH(password) <= 255)
);

CREATE TABLE Product (
    name VARCHAR(255) NOT NULL,
    manufacturer VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (name, manufacturer)
);

CREATE TABLE Order (
    active BOOLEAN NOT NULL,
    count INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_manufacturer VARCHAR(255) NOT NULL,
    PRIMARY KEY (product_name, product_manufacturer),
    FOREIGN KEY (product_name, product_manufacturer) REFERENCES Product(name, manufacturer)
);


CREATE TABLE Consumer (
    order_id INT PRIMARY KEY,
    FOREIGN KEY (order_id) REFERENCES Order(order_id)
);
