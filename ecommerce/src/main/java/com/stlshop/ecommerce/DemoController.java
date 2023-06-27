package com.stlshop.ecommerce;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/demo-controller")
public class DemoController {
    @GetMapping
    public ResponseEntity<String> getToken(@RequestHeader HttpHeaders header) {
        System.out.println("Get Token start!");
        String userEmail = JwtService.getUserIdByToken(header,
                "0a163b4e07c2a2f5c35ff7023ccc8c673092e4a705c748e2c126fda9514c3684");
        return ResponseEntity.status(HttpStatus.OK).body(userEmail);
    }
    // public ResponseEntity<String> sayHello() {
    // return ResponseEntity.ok("Hello from secured endpooint");
    // }
}
