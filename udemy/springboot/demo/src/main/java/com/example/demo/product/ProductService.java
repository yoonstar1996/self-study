package com.example.demo.product;

import org.springframework.stereotype.Service;

@Service
public class ProductService {

  private ProductRepository productRepository;
  
  ProductService(ProductRepository productRepository) {
    this.productRepository  = productRepository;
  }

  public Product findProduct(int id) {
    return productRepository.findProduct(id);
  }

  public void saveProduct(Product product) {
    productRepository.save(product);
  }
}
