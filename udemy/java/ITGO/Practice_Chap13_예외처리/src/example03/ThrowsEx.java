package example03;

public class ThrowsEx {
  // JVM에게 예외를 던지기
  public static void main(String[] args) throws Exception{
    try {
      method1();
    } catch (Exception e) {
      System.out.println("0으로 나눌 수 없습니다."); // 0으로 나눌 수 없습니다.
    }
  }

  // throws는 메서드 선언부 끝에 작성을 하며, 호출한 곳에서 예외를 반드시 처리해야한다.
  public static void method1() throws Exception {
    method2();
  }

  public static void method2() throws Exception {
    System.out.println(10 / 0 ); // 예외
  }
}
