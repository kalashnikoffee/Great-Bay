DROP DATABASE IF EXISTS greatBay_db;
CREATE DATABASE greatBay_db;
USE greatBay_db;

CREATE TABLE bidItems (
    bidID INT NOT NULL AUTO_INCREMENT,
    item VARCHAR(50) NOT NULL,
    bid INT(11) NOT NULL,
    PRIMARY KEY (bidID)
);

CREATE TABLE allBids (
    id INT NOT NULL AUTO_INCREMENT,
    currentBid INT(100),
    FOREIGN KEY (bidID) FROM bidItems(bidID),
    PRIMARY KEY (id)
);

