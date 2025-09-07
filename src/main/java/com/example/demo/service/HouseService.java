package com.example.demo.service;
import com.example.demo.model.*;
import com.example.demo.repository.HouseRepository;
import com.example.demo.repository.HouseTranslationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HouseService
{
    private final HouseRepository houseRepo;
    private final ImageService imageService;

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

    public void addHouse(HouseRequest request, List<MultipartFile> images) throws IOException {
        HouseTranslation translationRU = new HouseTranslation(null, request.nameRU(), request.descriptionRU(), request.locationRU(), request.type(), Language.RU, request.fullDescriptionRU());
        HouseTranslation translationUA = new HouseTranslation(null, request.nameUA(), request.descriptionUA(), request.locationUA(), request.type(), Language.UA, request.fullDescriptionUA());
        HouseTranslation translationEN = new HouseTranslation(null, request.nameEN(), request.descriptionEN(), request.locationEN(), request.type(), Language.EN, request.fullDescriptionEN());
        HouseTranslation translationDE = new HouseTranslation(null, request.nameDE(), request.descriptionDE(), request.locationDE(), request.type(), Language.DE, request.fullDescriptionDE());

        House house = new House(null, request.price(), request.baseCurrency(), request.risk(),
                request.profitMin(), request.profitMax(), request.timeMin(), request.timeMax(),
                List.of(translationRU, translationUA, translationEN, translationDE));

        House savedHouse = houseRepo.save(house);
        if (images != null && !images.isEmpty()) imageService.uploadImages(savedHouse, images);
    }
}
