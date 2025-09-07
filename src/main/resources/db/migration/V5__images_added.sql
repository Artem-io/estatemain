CREATE TABLE images
(
    id         BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    image_path VARCHAR(255)          NULL,
    house_id   BIGINT                NULL,
    FOREIGN KEY (house_id) REFERENCES houses (id)
);