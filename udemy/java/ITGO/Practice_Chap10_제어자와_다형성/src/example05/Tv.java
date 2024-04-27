package example05;

public class Tv extends Product {
  // 조상 클래스의 매개변수가 있는 생성자 Product(int price){}를 호출
  public Tv() {
    super(400);
  }

  @Override
  public String toString() {
    return "TV";
  }
}
