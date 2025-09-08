package com.example.demo.controller;
import com.example.demo.model.House;
import com.example.demo.model.Image;
import com.example.demo.repository.HouseRepository;
import com.example.demo.service.HouseService;
import com.example.demo.service.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/images")
public class ImageController
{
    private final ImageService imageService;
    private final HouseRepository houseRepo;

//    public Image getImageByHouseId(int houseId) {
//
//    }

    @PostMapping("{houseId}")
    public void addImage(@PathVariable Long houseId, @RequestParam("images") List<MultipartFile> images) throws IOException {
        House house = houseRepo.findById(houseId)
                .orElseThrow(() -> new IllegalArgumentException("House not found"));
        imageService.uploadImages(house, images);
    }
}
