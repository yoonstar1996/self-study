package example03;

import java.util.Arrays;

public class ProductEx {
  public static void main(String[] args) {
    // 정적 초기화 블록 호출됨
    // 인스턴스 초기화 블록 호출됨
    Product p1 = new Product(); // 기본 생성자 호출됨
    // 인스턴스 초기화 블록 호출됨
    Product p2 = new Product(); // 기본 생성자 호출됨
    // 인스턴스 초기화 블록 호출됨
    Product p4 = new Product(); // 기본 생성자 호출됨
    
    System.out.println("Product.number : " + Product.number); // Product.number : 3
    System.out.println("p1.countNum : " + p1.countNum); // p1.countNum : 1
    System.out.println("p1.arr" + Arrays.toString(p1.iarr)); // p1.arr[6, 4, 4]
    
    System.out.println("Product.number : " + Product.number); // Product.number : 3
    System.out.println("p2.countNum : " + p2.countNum); // p2.countNum : 2
    System.out.println("p2.arr" + Arrays.toString(p2.iarr)); // p2.arr[3, 1, 8]
    
    // 인스턴스 초기화 블록 호출됨
    Product p3 = new Product(); // 기본 생성자 호출됨
    
    System.out.println("Product.number : " + Product.number); // Product.number : 4
    System.out.println("p3.countNum : " + p3.countNum); // p3.countNum : 4
    System.out.println("p3.arr" + Arrays.toString(p3.iarr)); // p3.arr[8, 9, 7]
    
    System.out.println("Product.number : " + Product.number); // Product.number : 4
    System.out.println("p4.countNum : " + p4.countNum); // p4.countNum : 3
    System.out.println("p4.arr" + Arrays.toString(p4.iarr)); // p4.arr[1, 4, 10]
    
  }
}
