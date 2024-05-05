package example04;

import java.util.Arrays;

// 클래스의 복제가 가능하게 하려면, java.lang.cloneable인터페잉스를 구현해야 한다.
public class Product implements Cloneable {
  private String id;
  private String name;
  private int price;
  private int[] arr;
  private Apple apple;
  
  public Product(String id, String name, int price, int[] arr, Apple apple) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.arr = arr;
    this.apple = apple;
  }

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public int getPrice() {
    return price;
  }

  public int[] getArr() {
    return arr;
  }

  public Apple getApple() {
    return apple;
  }

  @Override
  public String toString() {
    return "상품 아이디: " + this.id + "\n" + 
    "상품 이름: " + this.name + "\n" +
    "상품 가격: " + this.price + "\n" +
    "배열: " + Arrays.toString(this.arr) + "\n" +
    "Apple값: " + this.apple.price;
  }

  @Override
  protected Object clone() throws CloneNotSupportedException {
    // 먼저 얕은 복제를 호출(기본형 타입)
    Product cloned = (Product) super.clone(); // Object 클래스의 clone() 호출
    
    // 참조 타입들을 복제하는 코드
    cloned.arr = Arrays.copyOf(this.arr, this.arr.length); // 배열 복제
    cloned.apple = new Apple(this.apple.price); // 클래스 복제

    return cloned;
  }

  public Product getProduct() {
    Product cloned = null;
    try {
      // 깊은 복제가 여기서 일어난다.(참조 변수의 값들은 번지를 공유함)
      cloned = (Product) this.clone();
    } catch (CloneNotSupportedException e) {
      e.printStackTrace();
    }
    return cloned;
  }
}
