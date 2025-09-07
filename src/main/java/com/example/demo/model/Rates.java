package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.math.BigDecimal;

@JsonIgnoreProperties(ignoreUnknown = true)
@Data
public class Rates
{
    @JsonProperty("USD")
    private BigDecimal usd;

    @JsonProperty("EUR")
    private BigDecimal eur;

    @JsonProperty("GBP")
    private BigDecimal gbp;
}
