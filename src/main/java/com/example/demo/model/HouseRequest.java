package com.example.demo.model;
import java.math.BigDecimal;
import java.util.List;

public record HouseRequest
        (
                String nameRU,
                String nameUA,
                String nameEN,
                String nameDE,

                String descriptionRU,
                String descriptionUA,
                String descriptionEN,
                String descriptionDE,

                String locationRU,
                String locationUA,
                String locationEN,
                String locationDE,

                String type,
                Currency baseCurrency,
                BigDecimal price,
                BigDecimal profitMin,
                BigDecimal profitMax,
                BigDecimal timeMin,
                BigDecimal timeMax,
                Risk risk,

                String fullDescriptionRU,
                String fullDescriptionUA,
                String fullDescriptionEN,
                String fullDescriptionDE,

                List<String> videoUrls
        ) {}
