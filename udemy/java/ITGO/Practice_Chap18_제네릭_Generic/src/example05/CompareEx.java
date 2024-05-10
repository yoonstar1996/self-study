package example05;

public class CompareEx {
  public static void main(String[] args) {
    int result1 = Commpare.compare(100, 200);
    System.out.println(result1); // -1

    // String클래스는 Number클래스와 아무런 관계가 없다.
    // Commpare.compare("Yoon", "Park");

    // Number클래스는 Object클래스의 자손이기 때문에
    // 매개변수 타입으로 적합하지 않다.
    // Commpare.compare(new Object(), new Object());

    int result2 = Commpare.compare(Integer.valueOf(300), Integer.valueOf(200));
    System.out.println(result2); // 1

    // Number는 추상 클래스이므로 인스턴스를 생성하지 못한다.
    // Commpare.compare(new Number(), new Number());
  }
}
