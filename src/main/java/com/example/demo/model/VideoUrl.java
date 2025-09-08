package com.example.demo.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "video_urls")
public class VideoUrl
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String videoPath;
}
