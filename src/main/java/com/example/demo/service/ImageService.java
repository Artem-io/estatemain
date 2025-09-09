package com.example.demo.service;
import com.example.demo.model.house.House;
import com.example.demo.model.Image;
import com.example.demo.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService
{
    private final ImageRepository imageRepo;

    @Value("${upload.dir}")
    private String uploadDir;

    public void uploadImages(House house, List<MultipartFile> files) throws IOException {
        for (MultipartFile file : files)
            if(!Objects.requireNonNull(file.getContentType()).startsWith("image/")) throw new RuntimeException("Invalid image type");

        deleteHouseImages(house.getId());
        Path basePath = getAbsoluteBasePath();

        Path houseDirPath = basePath.resolve("houses").resolve(house.getId().toString());
        Files.createDirectories(houseDirPath);

        for (MultipartFile file : files) {
            if (file.isEmpty()) continue;

            String originalFilename = file.getOriginalFilename();
            String fileExtension = originalFilename != null && originalFilename.contains(".")
                    ? originalFilename.substring(originalFilename.lastIndexOf("."))
                    : ".jpg";
            String fileName = UUID.randomUUID().toString() + fileExtension;

            Path targetPath = houseDirPath.resolve(fileName);

            file.transferTo(targetPath.toFile());

            String dbImagePath = "houses/" + house.getId() + "/" + fileName;
            Image houseImage = new Image(null, dbImagePath, house);
            imageRepo.save(houseImage);
        }
    }

    public List<Image> getHouseImages(Long houseId) {
        return imageRepo.findByHouseId(houseId);
    }

    public void deleteImage(Image image) throws IOException {
        Path basePath = getAbsoluteBasePath();
        Path filePath = basePath.resolve(image.getImagePath().replace("/", File.separator));
        Files.deleteIfExists(filePath);
        imageRepo.delete(image);
    }

    public void deleteHouseImages(Long houseId) throws IOException {
        List<Image> images = imageRepo.findByHouseId(houseId);

        for (Image img : images)
            deleteImage(img);

        Path basePath = getAbsoluteBasePath();
        Path houseDirPath = basePath.resolve("houses").resolve(houseId.toString());

        if (Files.exists(houseDirPath) && Files.isDirectory(houseDirPath)) {
            try {
                Files.delete(houseDirPath);
            }
            catch (IOException e) {
                System.out.println("Could not delete directory (may not be empty): " + houseDirPath);
            }
        }
    }

    private Path getAbsoluteBasePath() {
        // Check if uploadDir is already absolute
        if (uploadDir.matches("^[A-Za-z]:.*|^/.*")) return Paths.get(uploadDir);

        String userHome = System.getProperty("user.home");
        return Paths.get(userHome, uploadDir);
    }
}