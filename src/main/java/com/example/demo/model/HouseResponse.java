package com.example.demo.model;
import com.example.demo.service.ImageService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Data
@AllArgsConstructor
@Component
public class HouseResponse
{
    private static ImageService imageService;

    private Long id;
    private String title;
    private String description;
    private String location;
    private String type;
    private BigDecimal priceEUR;
    private BigDecimal priceUSD;
    private BigDecimal priceGBP;
    private BigDecimal profitMin;
    private BigDecimal profitMax;
    private BigDecimal timeMin;
    private BigDecimal timeMax;
    private Risk risk;
    private String fullDescription;
    private List<Image> imageUrls;

    @Autowired
    public HouseResponse(ImageService imageService) {
        HouseResponse.imageService = imageService;
    }

    public static HouseResponse map(House house, HouseTranslation translation) {
        return new HouseResponse(
                house.getId(),
                translation.getTitle(),
                translation.getDescription(),
                translation.getLocation(),
                translation.getType(),
                house.getPriceEUR(),
                house.getPriceUSD(),
                house.getPriceGBP(),
                house.getProfitMin(),
                house.getProfitMax(),
                house.getTimeMin(),
                house.getTimeMax(),
                house.getRisk(),
                translation.getFullDescription(),
                imageService.getHouseImages(house.getId())
        );
    }
}
