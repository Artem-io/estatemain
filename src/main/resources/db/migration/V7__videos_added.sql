CREATE TABLE video_urls
(
    id         BIGINT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    video_path VARCHAR(255)          NULL,
    house_id   BIGINT                NULL,
    FOREIGN KEY (house_id) REFERENCES houses (id)
);