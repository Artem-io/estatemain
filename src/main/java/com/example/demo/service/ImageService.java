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
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService
{
    private final ImageRepository imageRepo;

    @Value("${upload.dir}")
    private String uploadDir;

    public void uploadImages(House house, List<MultipartFile> files) throws IOException {
        deleteHouseImages(house.getId());
        // Resolve uploadDir to absolute path
        String baseDir = uploadDir.matches("^[A-Za-z]:.*|^/.*")
                ? uploadDir
                : System.getProperty("user.dir") + "/" + uploadDir;

        // Normalize path separators for the OS
        baseDir = baseDir.replace("/", File.separator);

        // Create house-specific directory
        String houseDir = baseDir + "houses" + File.separator + house.getId();
        File directory = new File(houseDir);
        if (!directory.exists()) {
            if (!directory.mkdirs()) {
                throw new IOException("Failed to create directory: " + houseDir);
            }
        }

        for (MultipartFile file : files) {
            if (file.isEmpty()) continue;

            // Generate unique filename
            String originalFilename = file.getOriginalFilename();
            String fileExtension = originalFilename != null && originalFilename.contains(".")
                    ? originalFilename.substring(originalFilename.lastIndexOf("."))
                    : ".jpg";
            String fileName = UUID.randomUUID().toString() + fileExtension;
            String filePath = houseDir + File.separator + fileName;

            // Save file to filesystem
            File destination = new File(filePath);
            file.transferTo(destination);

            // Save image path to database (use forward slashes for URLs)
            String dbImagePath = "houses/" + house.getId() + "/" + fileName;
            Image houseImage = new Image(null, dbImagePath, house);
            imageRepo.save(houseImage);
        }
    }

    public List<Image> getHouseImages(Long houseId) {
        return imageRepo.findByHouseId(houseId);
    }

    public void deleteImage(Image image) throws IOException {
        // Build absolute path to file
        String baseDir = uploadDir.matches("^[A-Za-z]:.*|^/.*")
                ? uploadDir
                : System.getProperty("user.dir") + "/" + uploadDir;

        // Normalize path separators
        baseDir = baseDir.replace("/", File.separator);

        String filePath = baseDir + image.getImagePath().replace("/", File.separator);

        // Delete file if exists
        File file = new File(filePath);
        if (file.exists() && !file.delete()) {
            throw new IOException("Failed to delete file: " + filePath);
        }

        // Delete DB record
        imageRepo.delete(image);
    }

public void deleteHouseImages(Long houseId) throws IOException {
    List<Image> images = imageRepo.findByHouseId(houseId);

    // Delete all images
    for (Image img : images) {
        deleteImage(img);
    }

    // Build absolute path to the house folder
    String baseDir = uploadDir.matches("^[A-Za-z]:.*|^/.*")
            ? uploadDir
            : System.getProperty("user.dir") + "/" + uploadDir;
    baseDir = baseDir.replace("/", File.separator);

    String houseDirPath = baseDir + "houses" + File.separator + houseId;
    File houseDir = new File(houseDirPath);

    // Delete the folder if it exists and is empty
    if (houseDir.exists() && houseDir.isDirectory()) {
        String[] remainingFiles = houseDir.list();
        if (remainingFiles == null || remainingFiles.length == 0) {
            if (!houseDir.delete()) {
                throw new IOException("Failed to delete folder: " + houseDirPath);
            }
        }
    }
}

}