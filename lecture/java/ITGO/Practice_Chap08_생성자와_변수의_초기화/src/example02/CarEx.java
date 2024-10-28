package example02;

public class CarEx {
  public static void main(String[] args) {
    Car c1 = new Car();
    System.out.println(c1); // 노랑, 수동, 4

    Car c2 = new Car("검정", "자동", 4);
    System.out.println(c2); // 검정, 자동, 4

    Car c3 = new Car(c2);
    System.out.println(c3); // 검정, 자동, 4

    for(int i = 1; i <= 10; i++) {
      Car c = new Car(c2);
      System.out.println(i + "번째 차 : " + c);
    }

  }
}
