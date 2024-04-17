package com.example.demo.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@ResponseBody
public class ProductController {
  // 사용자(화면)가 요청을 보내면
  // 요청에 맞는 메소드를 실행

  @Autowired
  private ProductService productService;

  // 상품 조회
  @RequestMapping(value = "/products/{id}", method = RequestMethod.GET)
  public Product findProduct(@PathVariable("id") int id) {
    // localhost:8080/products/{id}
    System.out.println(id);
    return productService.findProduct(id);
  } 
  
  // 상품 등록
  // @RequestMapping(value = "/products", method=RequestMethod.POST)
  // public void saveProduct(@RequestParam(value="name") String productName) {
  //   // localhost:8080/products?name=productName
  //   System.out.println("POST");
  //     productService.saveProduct(productName);
  // }

    @RequestMapping(value = "/products", method=RequestMethod.POST)
  public void saveProduct(@RequestBody Product product) {
    System.out.println("POST");
      productService.saveProduct(product);
  }
  
}
