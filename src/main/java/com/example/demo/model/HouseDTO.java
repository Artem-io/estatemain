package com.example.demo.model;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HouseDTO
{
    private Long id;
    private String title;
    private String description;
    private String location;
    private String type;
    private String price;
    private BigDecimal profitMin;
    private BigDecimal profitMax;
    private BigDecimal timeMin;
    private BigDecimal timeMax;
    private Risk risk;

    public static HouseDTO map(House house, HouseTranslation translation) {
        return new HouseDTO(
                house.getId(),
                translation.getTitle(),
                translation.getDescription(),
                translation.getLocation(),
                translation.getType(),
                house.getPrice(),
                house.getProfitMin(),
                house.getProfitMax(),
                house.getTimeMin(),
                house.getTimeMax(),
                house.getRisk()
        );
    }
}
