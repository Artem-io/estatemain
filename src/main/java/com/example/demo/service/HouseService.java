package com.example.demo.service;
import com.example.demo.model.*;
import com.example.demo.repository.HouseRepository;
import com.example.demo.repository.HouseTranslationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
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

    @Transactional
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

    @Transactional
    public void deleteHouse(Long id) throws IOException {
        imageService.deleteHouseImages(id);
        houseRepo.deleteById(id);
    }

    @Transactional
    public House updateHouse(HouseRequest request, Long id) throws IOException {
        House house = houseRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("House not found"));

        // Update translations
        List<HouseTranslation> translations = house.getTranslations();
        for (HouseTranslation tr : translations) {
            switch (tr.getLanguageCode()) {
                case RU -> {
                    tr.setTitle(request.nameRU());
                    tr.setDescription(request.descriptionRU());
                    tr.setLocation(request.locationRU());
                    tr.setFullDescription(request.fullDescriptionRU());
                    tr.setType(request.type());
                }
                case UA -> {
                    tr.setTitle(request.nameUA());
                    tr.setDescription(request.descriptionUA());
                    tr.setLocation(request.locationUA());
                    tr.setFullDescription(request.fullDescriptionUA());
                    tr.setType(request.type());
                }
                case EN -> {
                    tr.setTitle(request.nameEN());
                    tr.setDescription(request.descriptionEN());
                    tr.setLocation(request.locationEN());
                    tr.setFullDescription(request.fullDescriptionEN());
                    tr.setType(request.type());
                }
                case DE -> {
                    tr.setTitle(request.nameDE());
                    tr.setDescription(request.descriptionDE());
                    tr.setLocation(request.locationDE());
                    tr.setFullDescription(request.fullDescriptionDE());
                    tr.setType(request.type());
                }
            }
        }

        // Update prices based on baseCurrency and external API
        String symbols = switch (request.baseCurrency()) {
            case EUR -> "USD,GBP";
            case USD -> "EUR,GBP";
            case GBP -> "USD,EUR";
        };

        String uri = UriComponentsBuilder.fromUriString(baseUrl)
                .queryParam("base", request.baseCurrency())
                .queryParam("amount", request.price())
                .queryParam("symbols", symbols)
                .toUriString();

        CurrencyApiResponse response = restClient.get().uri(uri).retrieve().body(CurrencyApiResponse.class);

        BigDecimal priceEUR = null, priceUSD = null, priceGBP = null;

        switch (request.baseCurrency()) {
            case EUR -> {
                priceEUR = request.price();
                priceUSD = response.getRates().getUsd();
                priceGBP = response.getRates().getGbp();
            }
            case USD -> {
                priceUSD = request.price();
                priceEUR = response.getRates().getEur();
                priceGBP = response.getRates().getGbp();
            }
            case GBP -> {
                priceGBP = request.price();
                priceEUR = response.getRates().getEur();
                priceUSD = response.getRates().getUsd();
            }
        }

        house.setPriceEUR(priceEUR);
        house.setPriceUSD(priceUSD);
        house.setPriceGBP(priceGBP);
        house.setProfitMin(request.profitMin());
        house.setProfitMax(request.profitMax());
        house.setTimeMin(request.timeMin());
        house.setTimeMax(request.timeMax());
        house.setRisk(request.risk());

        // Update video URLs
        house.getVideoUrls().clear();
        List<VideoUrl> videoUrls = new ArrayList<>();
        if (request.videoUrls() != null) {
            for (String url : request.videoUrls())
                videoUrls.add(new VideoUrl(null, url));
            house.getVideoUrls().addAll(videoUrls);
        }

        imageService.deleteHouseImages(id);
        return houseRepo.save(house);
    }

}
