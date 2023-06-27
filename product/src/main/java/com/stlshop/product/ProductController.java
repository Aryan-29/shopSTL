package com.stlshop.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/api/v1/addproduct")
    public String helloMessage() {
        return "Hello world";
    }

    @PostMapping("/api/v1/addproduct")
    public ResponseEntity<String> addNewProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return ResponseEntity.ok("Product Added");
    }
}
