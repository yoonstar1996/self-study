package example07;

public interface MyInterface {
  int MAX_NUM = 10; // static final 상수
  void method(); // 추상 메서드

  // JDK 1.8부터 추가된 멤버
  default void dMethod() {
    System.out.println("MyInterface의 디폴트 메서드 호출");
  }
  static void sMethod() {
    System.out.println("MyInterface의 정적 메서드 호출");
  }
}
