package com.example.demo.service;
import com.example.demo.model.House;
import com.example.demo.model.HouseDTO;
import com.example.demo.model.HouseTranslation;
import com.example.demo.repository.HouseRepository;
import com.example.demo.repository.HouseTranslationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class HouseService
{
    private final HouseRepository houseRepo;

    public List<HouseDTO> getAllHouses(String lan) {
        List<House> houses = houseRepo.findAll();

        List<HouseDTO> dtos = new ArrayList<>();
        for (House house : houses) {
            HouseTranslation translation = house.getTranslations().stream().filter(tr ->
                    tr.getLanguageCode().equals(lan)).findFirst().orElseThrow();

            dtos.add(HouseDTO.map(house, translation));
        }

        return dtos;
    }

    public HouseDTO getHouseById(Long id, String lan) {
        House house = houseRepo.findById(id).orElseThrow();

        HouseTranslation translation = house.getTranslations().stream().filter(tr ->
                tr.getLanguageCode().equals(lan)).findFirst().orElseThrow();

        return HouseDTO.map(house, translation);
    }
}
