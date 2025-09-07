ALTER TABLE houses drop column currency;
ALTER TABLE houses drop column price;

ALTER TABLE houses add priceeur DECIMAL(15,2);
ALTER TABLE houses add priceusd DECIMAL(15,2);
ALTER TABLE houses add pricegbp DECIMAL(15,2);

ALTER TABLE houses
    MODIFY COLUMN profit_min DECIMAL(5,2);

ALTER TABLE houses
    MODIFY COLUMN profit_max DECIMAL(5,2);