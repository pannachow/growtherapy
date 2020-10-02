 -- Drop tables if they exist

DROP TABLE IF EXISTS plants_api_data;
DROP TABLE IF EXISTS plants_input_data;
DROP TABLE IF EXISTS individual_user;
DROP TABLE IF EXISTS business_user;

-- (Re)create tables

CREATE TABLE plants_api_data (
    id INT NOT NULL,
    common_name VARCHAR(30) NOT NULL,
    scientific_name VARCHAR(30) NOT NULL,
    year VARCHAR(4) NOT NULL, family VARCHAR(20) NOT NULL,
    family_common_name VARCHAR(20) NOT NULL,
    native VARCHAR(200) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE plants_input_data (
    id INT NOT NULL PRIMARY KEY,
    plant_id INT,
    image_url VARCHAR(100) NOT NULL,
    water_needs INT NOT NULL, light_needs INT NOT NULL,
    notes VARCHAR(400),
    FOREIGN KEY (plant_id) REFERENCES plants_api_data(id)
        ON DELETE CASCADE
);

CREATE TABLE individual_user (
    id INT NOT NULL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(50) NOT NULL,
    plant_id INT,
    FOREIGN KEY (plant_id) REFERENCES plants_api_data(id) 
        ON DELETE CASCADE
);

CREATE TABLE business_user (
    id INT NOT NULL PRIMARY KEY,
    company_name VARCHAR(20) NOT NULL,
    website VARCHAR(20) NOT NULL,
    location VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(50) NOT NULL,
    plant_id INT,
    FOREIGN KEY (plant_id) REFERENCES plants_api_data(id)
        ON DELETE CASCADE
);