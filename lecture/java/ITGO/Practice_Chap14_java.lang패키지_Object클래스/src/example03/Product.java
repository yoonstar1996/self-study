package example03;

import java.util.Arrays;

// 클래스의 복제가 가능하게 하려면, java.lang.cloneable인터페잉스를 구현해야 한다.
public class Product implements Cloneable {
  private String id;
  private String name;
  private int price;
  private int[] arr;
  
  public Product(String id, String name, int price, int[] arr) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.arr = arr;
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

  @Override
  public String toString() {
    return "상품 아이디: " + this.id + "\n" + 
    "상품 이름: " + this.name + "\n" +
    "상품 가격: " + this.price + "\n" +
    "배열: " + Arrays.toString(this.arr);
  }

  // @Override
  // protected Object clone() throws CloneNotSupportedException {

  //   return super.clone();
  // }
  public Product getProduct() {
    Product cloned = null;
    try {
      // 얕은 복제가 여기서 일어난다.(참조 변수의 값들은 번지를 공유함)
      cloned = (Product) this.clone();
    } catch (CloneNotSupportedException e) {
      e.printStackTrace();
    }
    return cloned;
  }
}
