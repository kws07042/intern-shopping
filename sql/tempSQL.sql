CREATE TABLE IF NOT EXISTS users(
    uid         int(11)      NOT NULL AUTO_INCREMENT,
    username   varchar(255) NOT NULL,
    password   varchar(255) NOT NULL,
    email      varchar(255) NOT NULL,
    phone      varchar(255) NOT NULL,
    address    varchar(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (uid)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8
  AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS products(
    pid          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(255)   NOT NULL,
    price       DECIMAL(10, 2) NOT NULL,
    description TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cart(
    cid         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT             NOT NULL,
    product_id INT             NOT NULL,
    quantity   INT             NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(uid),
    FOREIGN KEY (product_id) REFERENCES products(pid)
);

CREATE TABLE IF NOT EXISTS orders(
    oid         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT             NOT NULL,
    total_price      DECIMAL(10, 2)  NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(uid)
);

-- insert data
INSERT INTO products (name, price, description) VALUES ('Product 1', 10000, 'Description 1');
INSERT INTO products (name, price, description) VALUES ('Product 2', 20000, 'Description 2');
INSERT INTO products (name, price, description) VALUES ('Product 3', 30000, 'Description 3');
INSERT INTO products (name, price, description) VALUES ('Product 4', 40000, 'Description 4');
INSERT INTO products (name, price, description) VALUES ('Product 5', 50000, 'Description 5');