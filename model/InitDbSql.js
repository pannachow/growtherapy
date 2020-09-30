module.exports = `

DROP TABLE IF EXISTS ;

CREATE TABLE plants api data (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    common_name VARCHAR(30) NOT NULL,
    scientific_name VARCHAR(30) NOT NULL,
    year VARCHAR(4) NOT NULL,
    family VARCHAR(20) NOT NULL,
    family_common_name VARCHAR(20) NOT NULL,
    native VARCHAR(200) NOT NULL
);

CREATE TABLE plants input data (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    plant_id INT NOT NULL FOREIGN KEY AUTO_INCREMENT,
    image_url VARCHAR(100) NOT NULL,
    water_needs INT NOT NULL,
    light_needs INT NOT NULL,
    notes VARCHAR(400)
);


INSERT INTO plants input data (plant_id, image_url, water_needs, light_needs, notes)
VALUES
    (),


`