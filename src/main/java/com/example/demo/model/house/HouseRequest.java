package com.example.demo.model.house;
import com.example.demo.model.Currency;
import com.example.demo.model.Risk;

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

                String typeRU,
                String typeUA,
                String typeEN,
                String typeDE,

                Currency baseCurrency,
                BigDecimal price,
                BigDecimal profitMin,
                BigDecimal profitMax,
                BigDecimal timeMin,
                BigDecimal timeMax,
                Risk risk,
                Boolean actual,

                String fullDescriptionRU,
                String fullDescriptionUA,
                String fullDescriptionEN,
                String fullDescriptionDE,

                List<String> videoUrls
        ) {}
