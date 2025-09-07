package com.example.demo.controller;
import com.example.demo.model.HouseRequest;
import com.example.demo.model.HouseResponse;
import com.example.demo.model.HouseFilter;
import com.example.demo.model.Language;
import com.example.demo.service.HouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/houses")
public class HouseController
{
    private final HouseService houseService;

    @GetMapping
    public ResponseEntity<?> getAllHouses(@RequestParam(value = "lan", defaultValue = "EN") Language lan,
                                                       @PageableDefault Pageable pageable,
                                                       HouseFilter filter) {
        //houses?lan=RU&page=1&type=Бизнес&region=Германия&currency=EUR&price_min=100000&price_max=200000
        return ResponseEntity.ok(houseService.getAllHouses(lan, pageable, filter));
    }

    @GetMapping("{id}")
    public ResponseEntity<HouseResponse> getHouseById(@PathVariable Long id, @RequestParam(value = "lan") Language lan) {
        return ResponseEntity.ok(houseService.getHouseById(id, lan));
    }

//    @PostMapping
//    public ResponseEntity<HouseResponse> createHouse(@RequestBody HouseRequest request) {
//        return ResponseEntity.ok(houseService.addHouse(request));
//    }
}
