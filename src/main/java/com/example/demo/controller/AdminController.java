package com.example.demo.controller;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class AdminController
{
    @Value("${admin.password}")
    private String realPassword;

    @PostMapping
    public ResponseEntity<Boolean> login(@RequestParam("password") String password) {
        return ResponseEntity.ok(password.equals(realPassword));
    }

}
