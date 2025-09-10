package com.example.demo.controller;
import com.example.demo.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/email")
public class EmailController
{
    private final EmailService emailService;

    @PostMapping
    public void sendEmail(@RequestBody String email) {
        emailService.sendEmail("zana1artm.io@gmail.com", "Клиент заинтересован в недвижимости", email);
    }
}
