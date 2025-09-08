package com.example.demo.model.house;
import com.example.demo.model.Currency;

public record HouseFilter (
     String type,
     String region,
     Currency currency,
     String price_min,
     String price_max,
     Boolean actual
){
    public boolean isEmpty() {
        return (type == null || type.isBlank()) &&
                (region == null || region.isBlank()) &&
                currency == null &&
                (price_min == null || price_min.isBlank()) &&
                (price_max == null || price_max.isBlank()) &&
                (actual == null);
    }
}
