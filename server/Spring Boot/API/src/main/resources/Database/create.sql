CREATE TABLE IF NOT EXISTS users(
    id BIGINT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    active int NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS items(
    id BIGINT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    type int NOT NULL,
    image VARCHAR(255),
    price VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    contact VARCHAR(255) NOT NULL,
    active int NOT NULL,
    FOREIGN KEY(username) REFERENCES users(username) ON UPDATE CASCADE,
    PRIMARY KEY(id)
);