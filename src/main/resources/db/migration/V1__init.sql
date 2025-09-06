CREATE TABLE houses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    price VARCHAR(255) NOT NULL,
    risk VARCHAR(100) NOT NULL,
    profit_min DECIMAL(5,2) NOT NULL,
    profit_max DECIMAL(5,2) NOT NULL,
    time_min DECIMAL(4,2) NOT NULL,
    time_max DECIMAL(4,2) NOT NULL
);

CREATE TABLE houses_translations (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    house_id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    language_code VARCHAR(5) NOT NULL,
    FOREIGN KEY (house_id) REFERENCES houses(id) ON DELETE CASCADE,
    UNIQUE KEY uk_house_lang (house_id, language_code)
);