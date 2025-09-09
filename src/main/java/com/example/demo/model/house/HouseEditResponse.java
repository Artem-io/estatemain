package com.example.demo.model.house;
import com.example.demo.model.*;
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
public class HouseEditResponse
{
    private static ImageService imageService;

    private String titleRU;
    private String titleEN;
    private String titleUA;
    private String titleDE;

    private String descriptionRU;
    private String descriptionEN;
    private String descriptionUA;
    private String descriptionDE;


    private String locationRU;
    private String locationEN;
    private String locationUA;
    private String locationDE;

    private String typeRU;

    private BigDecimal priceEUR;
    private BigDecimal priceUSD;
    private BigDecimal priceGBP;
    private Currency baseCurrency;

    private BigDecimal profitMin;
    private BigDecimal profitMax;
    private BigDecimal timeMin;
    private BigDecimal timeMax;
    private Risk risk;
    private Boolean actual;

    private String fullDescriptionRU;
    private String fullDescriptionEN;
    private String fullDescriptionUA;
    private String fullDescriptionDE;

    private List<String> imageUrls;
    private List<String> videoUrls;

    @Autowired
    public HouseEditResponse(ImageService imageService) {
        HouseEditResponse.imageService = imageService;
    }

    public static HouseEditResponse map(House house) {
        return new HouseEditResponse(
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.RU))
                        .findFirst().map(HouseTranslation::getTitle).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.EN))
                        .findFirst().map(HouseTranslation::getTitle).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.UA))
                        .findFirst().map(HouseTranslation::getTitle).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.DE))
                        .findFirst().map(HouseTranslation::getTitle).orElse(null),

                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.RU))
                        .findFirst().map(HouseTranslation::getDescription).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.EN))
                        .findFirst().map(HouseTranslation::getDescription).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.UA))
                        .findFirst().map(HouseTranslation::getDescription).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.DE))
                        .findFirst().map(HouseTranslation::getDescription).orElse(null),

                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.RU))
                        .findFirst().map(HouseTranslation::getLocation).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.EN))
                        .findFirst().map(HouseTranslation::getLocation).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.UA))
                        .findFirst().map(HouseTranslation::getLocation).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.DE))
                        .findFirst().map(HouseTranslation::getLocation).orElse(null),

                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.RU))
                        .findFirst().map(HouseTranslation::getType).orElse(null),

                house.getPriceEUR(),
                house.getPriceUSD(),
                house.getPriceGBP(),
                house.getBaseCurrency(),
                house.getProfitMin(),
                house.getProfitMax(),
                house.getTimeMin(),
                house.getTimeMax(),
                house.getRisk(),
                house.getActual(),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.RU))
                        .findFirst().map(HouseTranslation::getFullDescription).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.EN))
                        .findFirst().map(HouseTranslation::getFullDescription).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.UA))
                        .findFirst().map(HouseTranslation::getFullDescription).orElse(null),
                house.getTranslations().stream()
                        .filter(tr -> tr.getLanguageCode().equals(Language.DE))
                        .findFirst().map(HouseTranslation::getFullDescription).orElse(null),

                imageService.getHouseImages(house.getId()).stream().map(Image::getImagePath).toList(),
                house.getVideoUrls().stream().map(VideoUrl::getVideoPath).toList()
        );
    }
}
