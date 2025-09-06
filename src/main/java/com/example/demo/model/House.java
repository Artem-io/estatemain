package com.example.demo.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = "houses")
public class House
{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "price is required")
    private String price;

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

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "house_id")
    private List<HouseTranslation> translations = new ArrayList<>();
}
