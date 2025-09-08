package com.example.demo.model.house;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Path;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class HouseSpecifications {

    public static Specification<House> withFilters(HouseFilter filter) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            // join translations
            Join<House, HouseTranslation> translation = root.join("translations", JoinType.INNER);

            // Filter by type
            if (filter.type() != null && !filter.type().isBlank()) {
                predicates.add(cb.equal(translation.get("type"), filter.type()));
            }

            // Filter by region (substring match, case insensitive)
            if (filter.region() != null && !filter.region().isBlank()) {
                predicates.add(cb.like(
                        cb.lower(translation.get("location")),
                        "%" + filter.region().toLowerCase() + "%"
                ));
            }

            // Filter by price (depends on selected currency)
            if (filter.currency() != null) {
                Path<BigDecimal> pricePath = switch (filter.currency()) {
                    case EUR -> root.get("priceEUR");
                    case USD -> root.get("priceUSD");
                    case GBP -> root.get("priceGBP");
                };

                if (filter.price_min() != null && !filter.price_min().isBlank()) {
                    predicates.add(cb.greaterThanOrEqualTo(pricePath, new BigDecimal(filter.price_min())));
                }
                if (filter.price_max() != null && !filter.price_max().isBlank()) {
                    predicates.add(cb.lessThanOrEqualTo(pricePath, new BigDecimal(filter.price_max())));
                }
            }

            // Filter by isActual
            if (filter.actual() != null) {
                predicates.add(cb.equal(root.get("actual"), filter.actual()));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}
