package com.example.demo.service;
import com.example.demo.model.*;
import com.example.demo.repository.HouseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HouseService
{
    private final HouseRepository houseRepo;

    public List<HouseDTO> getAllHouses(Language lan, Pageable pageable, HouseFilter filter) {
        List<House> houses = filter.isEmpty()
                ? houseRepo.findAll(pageable).getContent()
                : houseRepo.findAll(HouseSpecifications.withFilters(filter), pageable).getContent();


        List<HouseDTO> dtos = new ArrayList<>();
        for (House house : houses) {
            HouseTranslation translation = house.getTranslations().stream().filter(tr ->
                    tr.getLanguageCode().equals(lan)).findFirst().orElseThrow();

            dtos.add(HouseDTO.map(house, translation));
        }

        return dtos;
    }

    public HouseDTO getHouseById(Long id, Language lan) {
        House house = houseRepo.findById(id).orElseThrow();

        HouseTranslation translation = house.getTranslations().stream().filter(tr ->
                tr.getLanguageCode().equals(lan)).findFirst().orElseThrow();

        return HouseDTO.map(house, translation);
    }
}
