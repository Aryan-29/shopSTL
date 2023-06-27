package com.stlshop.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public void saveProduct(Product product) {
        productRepository.save(product);
    }
}
