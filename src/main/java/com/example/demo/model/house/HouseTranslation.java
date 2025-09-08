package com.example.demo.model.house;
import com.example.demo.model.Language;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "houses_translations")
public class HouseTranslation
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "title is required")
    private String title;

    @NotBlank(message = "description is required")
    private String description;

    @NotBlank(message = "location is required")
    private String location;

    @NotBlank(message = "type is required")
    private String type;

    @Enumerated(EnumType.STRING)
    private Language languageCode;

    @Column(name = "full_description", columnDefinition = "TEXT")
    @Size(max = 10000, message = "Full description cannot exceed 10000 characters")
    private String fullDescription;
}
