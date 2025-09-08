package com.example.demo.model.house;
import com.example.demo.model.Image;
import com.example.demo.model.Risk;
import com.example.demo.model.VideoUrl;
import com.example.demo.service.ImageService;
import lombok.AllArgsConstructor;
import lombok.Data;
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
    private Boolean actual;
    private String fullDescription;
    private List<String> imageUrls;
    private List<String> videoUrls;

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
                house.getActual(),
                translation.getFullDescription(),
                imageService.getHouseImages(house.getId()).stream().map(Image::getImagePath).toList(),
                house.getVideoUrls().stream().map(VideoUrl::getVideoPath).toList()
        );
    }
}
