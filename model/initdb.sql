SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS plant_data;
CREATE TABLE plant_data (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    trefle_plant_id INT NOT NULL,
    image_url VARCHAR(300),
    water_needs INT NOT NULL, 
    light_needs INT NOT NULL,
    notes VARCHAR(400)
    );

DROP TABLE IF EXISTS individual_user;
CREATE TABLE individual_user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(50) NOT NULL
    );

DROP TABLE IF EXISTS business_user;
CREATE TABLE business_user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(20) NOT NULL,
    website VARCHAR(20) NOT NULL,
    location VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(50) NOT NULL
    );

DROP TABLE IF EXISTS individual_users_plants;
CREATE TABLE individual_users_plants (
    user_id INT NOT NULL,
    plant_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES individual_user(id),
        FOREIGN KEY (plant_id) REFERENCES plant_data(id)
    );

DROP TABLE IF EXISTS business_users_plants;
CREATE TABLE business_users_plants (
    user_id INT NOT NULL,
    plant_id INT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES business_user(id),
        FOREIGN KEY (plant_id) REFERENCES plant_data(id)
    );

INSERT INTO plant_data (image_url, trefle_plant_id, light_needs, water_needs, notes)
    VALUES 
    -- Sansevieria trifasciata
    ('https://cdn.shopify.com/s/files/1/0012/9472/9282/products/little_leaf_web_snake_plant_1150x1150.jpg?v=1554229767',
    1258091, 1, 2, 'Allow soil to completely dry out in between waterings – this plant is prone to rot if overwatered.'),

    -- ZZ
    ('https://cdn.shopify.com/s/files/1/0012/9472/9282/products/little_leaf_web_zz_plant_1150x1150.jpg?v=1554229986',
    223713, 1, 2, 'Water when soil is completely dry. If plant turns yellow that means that it is getting too much water and it may be rotting.'),

    -- Monstera Deliciosa
    ('https://cdn.shopify.com/s/files/1/0012/9472/9282/products/little_leaf_web_monstera_1150x1150.jpg?v=1554229162',
    157554, 2, 3, 'Water when the top 50-75% of the soil is dry. Water until liquid flows through the drainage hole at the bottom of the pot and discard any water that has accumulated in the saucer. Avoid strong, direct sunlight as it may burn the leaves.'),

    -- Xerographica
    ('https://cdn.shopify.com/s/files/1/0012/9472/9282/products/little_leaf_web_xerographica_product_4fc85c5a-1a67-4b00-8cf1-ff704988cae5_2632x2632.jpg?v=1554910730',
    292693, 2, 3, 'No soil needed. To water, fully submerge in room temperature water approximately once a week for 20-30 minutes. To dry, lay upside down on a towel to to rid of excess water'),

    -- Alocasia Polly/ Kris' Plant
    ('https://cdn.shopify.com/s/files/1/0025/8159/4230/products/image_6_499x748.png?v=1593461332',
    344495, 2, 3, 'Allow soil to dry out on the top 2” - 3” before fully saturating with water'),

    -- Calathea Lancifola Rattlesnake
    ('https://cdn.shopify.com/s/files/1/0025/8159/4230/products/BF27937D-1407-4664-B628-2A214A07E15F_1280x1920.jpg?v=1596260703',
    780574, 2, 3, 'Allow soil to dry out on the top 2” - 3” before fully saturating with water'),

    -- Jade
    ('https://www.mydomaine.com/thmb/-qUavq1qP_46GUo4-ufXAES8RRc=/2121x1414/filters:fill(auto,1)/GettyImages-671324024-738bc918590d4bd6935b6622e9385ca1.jpg',
    123796, 3, 2, 'Water thoroughly when soil is completely dry'),

    -- Aloe Vera
    ('https://cdn.shopify.com/s/files/1/0025/8159/4230/products/3e8077490855372b69b03077f914441a_1188x1856.jpg?v=1595340563',
    103926, 3, 2, 'Water thoroughly when soil is completely dry'),

    -- Prayer Plant
    ('https://bloomscape.com/wp-content/uploads/2019/11/bloomscape-product-detail_red-prayer-plant-scaled.jpg?ver=94596',
    154631, 2, 3, 'Keep soil consistently moist – just enough so the soil is not too wet, nor too dry. Use lukewarm water and make sure to water the soil, not the leaves – water sitting on the leaves can cause leaf spot bacteria.'),

    -- Ponytail Palm
    ('https://cdn.shopify.com/s/files/1/0025/8159/4230/products/89DEFAC3-BC39-4C58-8049-A6E29E22DFAA_1280x1920.jpg?v=1598322085',
    360933, 2, 1, 'When the tips of ponytail turn brown — just snip these off and adjust watering if necessary.');

