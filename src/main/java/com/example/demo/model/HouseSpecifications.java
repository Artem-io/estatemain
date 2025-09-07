package com.example.demo.model;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.jpa.domain.Specification;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class HouseSpecifications {

    public static Specification<House> withFilters(HouseFilter filter) {
        return (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            // join translations (OneToMany)
            Join<House, HouseTranslation> translation = root.join("translations", JoinType.INNER);

            // Filter by type
            if (filter.type() != null && !filter.type().isBlank()) {
                predicates.add(cb.equal(translation.get("type"), filter.type()));
            }

            // Filter by region (your HouseTranslation has "location")
            if (filter.region() != null && !filter.region().isBlank()) {
                predicates.add(cb.equal(translation.get("location"), filter.region()));
            }

            // Filter by currency
            if (filter.currency() != null) {
                predicates.add(cb.equal(root.get("currency"), filter.currency()));
            }

            // Filter by price
            if (filter.price_min() != null) {
                predicates.add(cb.greaterThanOrEqualTo(root.get("price"), new BigDecimal(filter.price_min())));
            }

            if (filter.price_max() != null) {
                predicates.add(cb.lessThanOrEqualTo(root.get("price"), new BigDecimal(filter.price_max())));
            }


            return cb.and(predicates.toArray(new Predicate[0]));
        };
    }
}

