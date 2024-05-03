CREATE TABLE IF NOT EXISTS users(
    id         int(11)      NOT NULL AUTO_INCREMENT,
    username   varchar(255) NOT NULL,
    password   varchar(255) NOT NULL,
    email      varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS products(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255)   NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cart(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT             NOT NULL,
    product_id INT             NOT NULL,
    quantity   INT             NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

CREATE TABLE IF NOT EXISTS orders(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT             NOT NULL,
    total      DECIMAL(10, 2)  NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- insert data
INSERT INTO products (name, price, description) VALUES ('Product 1', 10000, 'Description 1');
INSERT INTO products (name, price, description) VALUES ('Product 2', 20000, 'Description 2');
INSERT INTO products (name, price, description) VALUES ('Product 3', 30000, 'Description 3');
INSERT INTO products (name, price, description) VALUES ('Product 4', 40000, 'Description 4');
INSERT INTO products (name, price, description) VALUES ('Product 5', 50000, 'Description 5');