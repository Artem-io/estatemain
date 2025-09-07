ALTER TABLE houses_translations
    ADD full_description TEXT NOT NULL;

ALTER TABLE houses
    MODIFY COLUMN profit_min DECIMAL(15,2);

ALTER TABLE houses
    MODIFY COLUMN profit_max DECIMAL(15,2);
