package com.example.demo.model;

public record HouseFilter (
     String type,
     String region,
     Currency currency,
     String price_min,
     String price_max
){
    public boolean isEmpty() {
        return (type == null || type.isBlank()) &&
                (region == null || region.isBlank()) &&
                currency == null &&
                (price_min == null || price_min.isBlank()) &&
                (price_max == null || price_max.isBlank());
    }
}
