package com.example.demo.controller;
import com.example.demo.model.HouseDTO;
import com.example.demo.service.HouseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/houses")
public class HouseController
{
    private final HouseService houseService;

    @GetMapping
    public ResponseEntity<?> getAllHouses(@RequestParam(value = "lan") String lan) {
        return ResponseEntity.ok(houseService.getAllHouses(lan));
    }

    @GetMapping("{id}")
    public ResponseEntity<HouseDTO> getHouseById(@PathVariable Long id, @RequestParam(value = "lan") String lan) {
        return ResponseEntity.ok(houseService.getHouseById(id, lan));
    }
}
