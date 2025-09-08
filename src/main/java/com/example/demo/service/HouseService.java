package com.example.demo.service;
import com.example.demo.model.*;
import com.example.demo.repository.HouseRepository;
import com.example.demo.repository.HouseTranslationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class HouseService
{
    private final HouseRepository houseRepo;
    private final ImageService imageService;
    private final String baseUrl;
    private final RestClient restClient;

    @Autowired
    public HouseService(HouseRepository houseRepo, ImageService imageService, @Value("${base.currency.url}") String baseUrl, RestClient restClient) {
        this.houseRepo = houseRepo;
        this.imageService = imageService;
        this.baseUrl = baseUrl;
        this.restClient = restClient;
    }

    public List<HouseResponse> getAllHouses(Language lan, Pageable pageable, HouseFilter filter) {
        List<House> houses = filter.isEmpty()
                ? houseRepo.findAll(pageable).getContent()
                : houseRepo.findAll(HouseSpecifications.withFilters(filter), pageable).getContent();


        List<HouseResponse> dtos = new ArrayList<>();
        for (House house : houses) {
            HouseTranslation translation = house.getTranslations().stream().filter(tr ->
                    tr.getLanguageCode().equals(lan)).findFirst().orElseThrow();

            dtos.add(HouseResponse.map(house, translation));
        }

        return dtos;
    }

    public HouseResponse getHouseById(Long id, Language lan) {
        House house = houseRepo.findById(id).orElseThrow();

        HouseTranslation translation = house.getTranslations().stream().filter(tr ->
                tr.getLanguageCode().equals(lan)).findFirst().orElseThrow();

        return HouseResponse.map(house, translation);
    }

    public House addHouse(HouseRequest request) {
        HouseTranslation translationRU = new HouseTranslation(null, request.nameRU(), request.descriptionRU(), request.locationRU(), request.type(), Language.RU, request.fullDescriptionRU());
        HouseTranslation translationUA = new HouseTranslation(null, request.nameUA(), request.descriptionUA(), request.locationUA(), request.type(), Language.UA, request.fullDescriptionUA());
        HouseTranslation translationEN = new HouseTranslation(null, request.nameEN(), request.descriptionEN(), request.locationEN(), request.type(), Language.EN, request.fullDescriptionEN());
        HouseTranslation translationDE = new HouseTranslation(null, request.nameDE(), request.descriptionDE(), request.locationDE(), request.type(), Language.DE, request.fullDescriptionDE());

        String symbols = switch (request.baseCurrency()) {
            case Currency.EUR -> "USD,GBP";
            case Currency.USD -> "EUR,GBP";
            case Currency.GBP -> "USD,EUR";
        };

        String uri = UriComponentsBuilder.fromUriString(baseUrl)
                .queryParam("base", request.baseCurrency())
                .queryParam("amount", request.price())
                .queryParam("symbols", symbols)
                .toUriString();

        CurrencyApiResponse response = restClient.get().uri(uri).retrieve().body(CurrencyApiResponse.class);
        //response != null
        BigDecimal priceEUR = null, priceUSD = null, priceGBP = null;

        switch (request.baseCurrency()) {
            case Currency.EUR:
                priceEUR = request.price();
                priceUSD = response.getRates().getUsd();
                priceGBP = response.getRates().getGbp();
                break;

            case Currency.USD:
                priceUSD = request.price();
                priceEUR = response.getRates().getEur();
                priceGBP = response.getRates().getGbp();
                break;

            case Currency.GBP:
                priceGBP = request.price();
                priceEUR = response.getRates().getEur();
                priceUSD = response.getRates().getUsd();
                break;
        }

        List<VideoUrl> videoUrls = new ArrayList<>();
        for(String url : request.videoUrls())
            videoUrls.add(new VideoUrl(null, url));

        House house = new House(null, priceEUR, priceUSD, priceGBP, request.risk(),
                request.profitMin(), request.profitMax(), request.timeMin(), request.timeMax(),
                List.of(translationRU, translationUA, translationEN, translationDE), videoUrls);

        return houseRepo.save(house);
    }

//    public void deleteHouse(Long id) {
//
//    }
}
