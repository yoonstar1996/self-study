package example03;

public class ProductEx {
  public static void main(String[] args) {
    Product<Tv, String> p1 = new Product<>();
    p1.setT(new Tv(2024, 5));
    p1.setM("LG OLED 스마트 TV");

    System.out.println("나의 TV는 " + p1.getT().getYear() + "년 " +
    p1.getT().getMonth() + "월 " +
    p1.getM() + "이다.");
    // 나의 TV는 2024년 5월 LG OLED 스마트 TV이다.

    System.out.println("------------------------");

    Product<Car, String> p2 = new Product<>();
    p2.setT(new Car("현대", 2023, 11));
    p2.setM("제네시스");
    
    Car car = p2.getT();
    String str = p2.getM();

    System.out.println("나의 차는 " + car.getYear() + "년 " +
    car.getMonth() + "월에 출시된 " + 
    car.getBrand() + "의 " + str + "이다.");
    // 나의 차는 2023년 11월에 출시된 현대의 제네시스이다.
  }
}
