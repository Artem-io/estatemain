package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "houses")
public class House
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal priceEUR;
    private BigDecimal priceUSD;
    private BigDecimal priceGBP;

    @Enumerated(EnumType.STRING)
    private Risk risk;

    @NotNull(message = "profit_min is required")
    private BigDecimal profitMin;

    @NotNull(message = "profit_max is required")
    private BigDecimal profitMax;

    @NotNull(message = "time_min is required")
    private BigDecimal timeMin;

    @NotNull(message = "time_max is required")
    private BigDecimal timeMax;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "house_id")
    private List<HouseTranslation> translations = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "house_id")
    private List<VideoUrl> videoUrls = new ArrayList<>();
}
