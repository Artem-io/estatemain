package com.example.demo.controller;
import com.example.demo.model.*;
import com.example.demo.model.house.HouseFilter;
import com.example.demo.model.house.HouseRequest;
import com.example.demo.model.house.HouseResponse;
import com.example.demo.service.HouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/houses")
public class HouseController
{
    private final HouseService houseService;

    @GetMapping
    public ResponseEntity<List<HouseResponse>> getAllHouses(@RequestParam(value = "lan", defaultValue = "EN") Language lan,

                                                            HouseFilter filter) {
        //houses?lan=RU&page=1&type=Business&region=Germany&currency=EUR&price_min=100000&price_max=200000
        return ResponseEntity.ok(houseService.getAllHouses(lan, filter));
    }

    @GetMapping("{id}")
    public ResponseEntity<HouseResponse> getHouseById(@PathVariable Long id, @RequestParam(value = "lan") Language lan) {
        return ResponseEntity.ok(houseService.getHouseById(id, lan));
    }

    @PostMapping
    public ResponseEntity<Long> createHouse(@RequestBody HouseRequest request) {
        return ResponseEntity.ok(houseService.addHouse(request));
    }

    @DeleteMapping("{id}")
    public void deleteHouse(@PathVariable Long id) throws IOException {
        houseService.deleteHouse(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<Long> updateHouse(@RequestBody HouseRequest request, @PathVariable Long id) throws IOException {
        return ResponseEntity.ok(houseService.updateHouse(request, id));
    }
}
