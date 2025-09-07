package com.example.demo.service;
import com.example.demo.model.House;
import com.example.demo.model.Image;
import com.example.demo.repository.HouseRepository;
import com.example.demo.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {
    
    private final HouseRepository houseRepo;
    private final ImageRepository imageRepo;

    @Value("${upload.dir}")
    private String uploadDir;

    public void uploadImages(House house, List<MultipartFile> files) throws IOException {
        // Create house-specific directory
        String houseDir = uploadDir + "/houses/" + house.getId();
        File directory = new File(houseDir);
        if (!directory.exists()) {
            directory.mkdirs();
        }

        for (MultipartFile file : files) {
            if (file.isEmpty()) continue;

            // Generate unique filename
            String fileName = UUID.randomUUID().toString() + "-" + file.getOriginalFilename();
            String filePath = houseDir + "/" + fileName;

            // Save file to filesystem
            file.transferTo(new File(filePath));

            // Save image path to database
            String dbImagePath = "/houses/" + house.getId() + "/" + fileName;
            Image houseImage = new Image(null, dbImagePath, house);
            imageRepo.save(houseImage);
        }
    }

    public List<Image> getHouseImages(Long houseId) {
        return imageRepo.findByHouseId(houseId);
    }
}