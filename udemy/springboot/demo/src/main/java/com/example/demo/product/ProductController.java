package com.example.demo.product;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
public class ProductController {
  // 사용자(화면)가 요청을 보내면
  // 요청에 맞는 메소드를 실행

  // 상품 조회
  @RequestMapping(value = "", method = RequestMethod.GET)
  public String findProduct() {
    ProductService productService = new ProductService();
    return productService.findProduect();
  } 

}
